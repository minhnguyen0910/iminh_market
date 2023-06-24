package com.example.minhmarket.service;

import com.example.minhmarket.model.Cart;

import java.util.List;

public interface ICartService {
    List<Cart> findByNameAcc(String name);
}
