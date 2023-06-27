package com.example.minhmarket.controller;

import com.example.minhmarket.model.*;
import com.example.minhmarket.repository.CustomerRepository;
import com.example.minhmarket.service.ICartService;
import com.example.minhmarket.service.IOrderDetailService;
import com.example.minhmarket.service.IOrderProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class CartController {
    @Autowired
    private ICartService iCartService;
    @Autowired
    private IOrderDetailService iOrderDetailService;
    @Autowired
    private IOrderProductService iOrderProductService;
    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Cart>> findByCustomer(@RequestParam(name = "nameAcc") String nameAcc) {
        return new ResponseEntity<>(iCartService.findByNameAcc(nameAcc), HttpStatus.OK);
    }

    @GetMapping("/setQtt")
    public ResponseEntity<?> setQttPlus(@RequestParam(name = "idCus") Integer idCus,
                                        @RequestParam(name = "idProduct") Integer idProduct,
                                        @RequestParam(name = "qtt") Integer qtt) {
        IdCart idCart = new IdCart(idProduct, idCus);
        Cart cart = iCartService.findById(idCart);
        if (cart.getQtt() < cart.getProduct().getQtt()) {
            cart.setQtt(qtt);
            cart.setPrice(qtt * cart.getProduct().getPrice());
            iCartService.save(cart);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/pay")
    public ResponseEntity<String> pay(@RequestParam(name = "userName") String userName) throws UnsupportedEncodingException {
        String url = iCartService.pay(userName);
        return new ResponseEntity<>(url, HttpStatus.OK);
    }

    @GetMapping("/create")
    public ResponseEntity<?> create(@RequestParam(name = "userName") String userName) {
        List<Cart> list = iCartService.findByNameAcc(userName);
        Customer customer = customerRepository.findByAccount_Name(userName);
        Double price = 0.0;
        for (Cart cart : list) {
            if (cart.getQtt() > cart.getProduct().getQtt()) {
                cart.setQtt(cart.getProduct().getQtt());
                cart.setPrice(cart.getQtt() * cart.getProduct().getPrice());
                iCartService.save(cart);
            }
            price += cart.getPrice();
        }
        OrderProduct orderProduct = iOrderProductService.save(new OrderProduct(price, LocalDate.now(), customer));
        for (Cart cart : list) {
            iOrderDetailService.save(new OrderDetail(new IdOrderDetail(orderProduct.getId(), cart.getProduct().getId()), orderProduct, cart.getProduct(), cart.getQtt(), cart.getPrice()));
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
