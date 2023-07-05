package com.example.minhmarket.controller;

import com.example.minhmarket.model.*;
import com.example.minhmarket.repository.CustomerRepository;
import com.example.minhmarket.repository.IOrderDetailRepository;
import com.example.minhmarket.repository.ProductRepository;
import com.example.minhmarket.service.ICartService;
import com.example.minhmarket.service.IOrderDetailService;
import com.example.minhmarket.service.IOrderProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/user/order")
@CrossOrigin("*")
public class OrderController {
    @Autowired
    IOrderDetailRepository iOrderDetailRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    ICartService iCartService;
    @Autowired
    IOrderProductService iOrderProductService;
    @Autowired
    IOrderDetailService iOrderDetailService;

    @GetMapping("/save")
    public ResponseEntity<?> saveOrder(@RequestParam(name = "userName") String userName) {
        List<Cart> list = iCartService.findByNameAcc(userName);
        Customer customer = list.get(0).getCustomer();
        Double sum = 0.0;
        for (Cart cart : list) {
            sum += cart.getPrice();
        }
        OrderProduct orderProduct = iOrderProductService.save(new OrderProduct(sum, LocalDate.now(), customer));
        for (Cart cart : list) {
            iOrderDetailService.save(new OrderDetail(new IdOrderDetail(orderProduct.getId(), cart.getProduct().getId()), orderProduct, cart.getProduct(), cart.getQtt(), cart.getPrice()));
            iCartService.delete(cart.getIdCart());
            Product product = cart.getProduct();
            product.setQtt(product.getQtt() - cart.getQtt());
            productRepository.save(product);
        }
        iCartService.sendEmail(customer.getEmail());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/history")
    public ResponseEntity<?> findOrder(@RequestParam(name = "username") String userName) {
        return new ResponseEntity<>(iOrderDetailRepository.getAllOrder(userName), HttpStatus.OK);
    }

    @GetMapping("/searchOrder")
    public ResponseEntity<?> searchOrder(@RequestParam(name = "username") String userName,
                                         @RequestParam(name = "start") String start,
                                         @RequestParam(name = "end") String end) {
        LocalDate dateStart = LocalDate.parse(start, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        LocalDate dateEnd = LocalDate.parse(end, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        return new ResponseEntity<>(iOrderDetailRepository.searchByDate(userName,dateStart,dateEnd), HttpStatus.OK);
    }
}
