package com.example.minhmarket.service.impl;

import com.example.minhmarket.config.VnPayConfig;
import com.example.minhmarket.model.*;
import com.example.minhmarket.repository.CustomerRepository;
import com.example.minhmarket.repository.ICartRepository;
import com.example.minhmarket.repository.ProductRepository;
import com.example.minhmarket.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;

@Service
public class CartService implements ICartService {
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    ICartRepository iCartRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    CustomerRepository customerRepository;

    public String pay(String userName) throws UnsupportedEncodingException {
        List<Cart> list = iCartRepository.findByCustomer_Account_NameAndStatus(userName, 0);
        int sum = 0;
        for (Cart cart : list) {
            sum += cart.getPrice();
        }

        String vnp_Version = "2.1.0";
        String vnp_Command = "pay";
        String vnp_TxnRef = VnPayConfig.getRandomNumber(8);

        String vnp_TmnCode = VnPayConfig.vnp_TmnCode;

        Map<String, String> vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", vnp_Version);
        vnp_Params.put("vnp_Command", vnp_Command);
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", String.valueOf(sum * 100));
        vnp_Params.put("vnp_CurrCode", "VND");
        vnp_Params.put("vnp_BankCode", "NCB");

        vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + vnp_TxnRef);
        vnp_Params.put("vnp_Locale", "vn");
        vnp_Params.put("vnp_ReturnUrl", VnPayConfig.vnp_Returnurl + "?userName=" + userName);
        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String vnp_CreateDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

        cld.add(Calendar.MINUTE, 15);
        String vnp_ExpireDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_ExpireDate", vnp_ExpireDate);

        List fieldNames = new ArrayList(vnp_Params.keySet());
        Collections.sort(fieldNames);
        StringBuilder hashData = new StringBuilder();
        StringBuilder query = new StringBuilder();
        Iterator itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = (String) itr.next();
            String fieldValue = (String) vnp_Params.get(fieldName);
            if ((fieldValue != null) && (fieldValue.length() > 0)) {
                //Build hash data
                hashData.append(fieldName);
                hashData.append('=');
                hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                //Build query
                query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                query.append('=');
                query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                if (itr.hasNext()) {
                    query.append('&');
                    hashData.append('&');
                }
            }
        }
        String queryUrl = query.toString();
        String vnp_SecureHash = VnPayConfig.hmacSHA512(VnPayConfig.vnp_HashSecret, hashData.toString());
        queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
        return VnPayConfig.vnp_PayUrl + "?" + queryUrl;
    }

    @Override
    public void addCart(CartDTO cartDTO) {
        Customer customer = customerRepository.findByAccount_Name(cartDTO.getUsername());
        boolean check = iCartRepository.existsById(new IdCart(cartDTO.getIdPro(), customer.getId()));
        Product product = productRepository.findById(cartDTO.getIdPro()).get();
        Cart cart;
        if (check) {
            cart = iCartRepository.findById(new IdCart(cartDTO.getIdPro(), customer.getId())).get();
            if (cartDTO.getQtt() + cartDTO.getQtt() >= product.getQtt()) {
                cart.setQtt(product.getQtt());
                cart.setPrice(product.getPrice()* product.getQtt());
                iCartRepository.save(cart);
            } else {
                int qtt=cartDTO.getQtt() + cart.getQtt();
                cart.setQtt(qtt);
                cart.setPrice(qtt* product.getPrice());
                iCartRepository.save(cart);
            }
        } else {
            iCartRepository.save(new Cart(new IdCart(cartDTO.getIdPro(), customer.getId()), product, customer, cartDTO.getQtt(), product.getPrice() * cartDTO.getQtt(), LocalDate.now(), 0));
        }
    }

    @Override
    public void delete(IdCart idCart) {
        iCartRepository.deleteById(idCart);
    }

    @Override
    public List<Cart> findByNameAcc(String name) {
        List<Cart> list = iCartRepository.findByCustomer_Account_NameAndStatus(name, 0);
        for (Cart cart : list) {
            if (cart.getQtt() > cart.getProduct().getQtt()) {
                cart.setQtt(cart.getProduct().getQtt());
                iCartRepository.save(cart);
            }
        }
        return list;
    }

    @Override
    public Cart findById(IdCart idCart) {
        return iCartRepository.findById(idCart).get();
    }

    @Override
    public void save(Cart cart) {
        iCartRepository.save(cart);
    }
    public void sendEmail(String email) {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper message;
        try {
            message = new MimeMessageHelper(mimeMessage, true);
            message.setTo(email);
            message.setSubject("Thông báo");
            message.setText("Kính gửi Quý khách hàng,<br><br>" + "Cảm ơn quý khách đã mua hàng tại MinhMarket. " + "Chúc quý khách có trải nghiệm tốt tại của hàng chúng tôi, " + "<br>" +"<br><br>" + "Trân trọng,<br>" + "<div style=\"color:#183661; font-size:20px; font-weight:bold\">DN Cinema</div>", true);
            javaMailSender.send(message.getMimeMessage());
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}
