package com.example.minhmarket.service;

import com.example.minhmarket.model.Cart;
import com.example.minhmarket.model.CartDTO;
import com.example.minhmarket.model.IdCart;

import java.io.UnsupportedEncodingException;
import java.util.List;

public interface ICartService {
    List<Cart> findByNameAcc(String name);
    Cart findById(IdCart idCart);
    void save(Cart cart);
    String pay(String userName) throws UnsupportedEncodingException;
    void addCart(CartDTO cartDTO);

    void delete(IdCart idCart);
    void sendEmail(String email);
}
