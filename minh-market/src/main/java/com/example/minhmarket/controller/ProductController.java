package com.example.minhmarket.controller;

import com.example.minhmarket.model.Product;
import com.example.minhmarket.repository.IOrderDetailRepository;
import com.example.minhmarket.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/public/product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    ProductRepository productRepository;


    @GetMapping("/list")
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(productRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable(name = "id") Integer id) {
        return new ResponseEntity<>(productRepository.findById(id).get(), HttpStatus.OK);
    }

    @GetMapping("/sort")
    public ResponseEntity<List<Product>> findAndSort(@RequestParam(name = "code") String code) {
        List<Product> productList = new ArrayList<>();
        switch (code) {
            case "1": {
                productList = productRepository.nameAsc();
                break;
            }
            case "2": {
                productList = productRepository.nameDesc();
                break;
            }
            case "3": {
                productList = productRepository.priceAsc();
                break;
            }
            case "4": {
                productList = productRepository.priceDesc();
                break;
            }
        }
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchByName(@RequestParam(name = "name") String name) {
        return new ResponseEntity<>(productRepository.findAllByNameContaining(name), HttpStatus.OK);
    }
}
