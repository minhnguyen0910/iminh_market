package com.example.minhmarket.controller;

import com.example.minhmarket.model.Cart;
import com.example.minhmarket.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class CartController {
    @Autowired
    ICartService iCartService;

    @GetMapping("/list")
    public ResponseEntity<List<Cart>> findByCustomer(@RequestParam(name = "nameAcc") String nameAcc) {
        return new ResponseEntity<>(iCartService.findByNameAcc(nameAcc), HttpStatus.OK);
    }
}
