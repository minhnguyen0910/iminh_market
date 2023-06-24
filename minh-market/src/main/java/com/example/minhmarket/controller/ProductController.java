package com.example.minhmarket.controller;

import com.example.minhmarket.model.Product;
import com.example.minhmarket.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/public/product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    ProductRepository productRepository;
    @GetMapping("/list")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>(productRepository.findAll(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable(name = "id")Integer id){
        return new ResponseEntity<>(productRepository.findById(id).get(),HttpStatus.OK);
    }
}
