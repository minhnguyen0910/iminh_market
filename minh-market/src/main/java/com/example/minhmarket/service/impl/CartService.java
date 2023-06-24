package com.example.minhmarket.service.impl;

import com.example.minhmarket.model.Cart;
import com.example.minhmarket.repository.ICartRepository;
import com.example.minhmarket.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CartService implements ICartService {
    @Autowired
    ICartRepository iCartRepository;
    @Override
    public List<Cart> findByNameAcc(String name) {
        List<Cart> list=iCartRepository.findByCustomer_Account_Name(name);
        for (Cart cart: list){
            if (cart.getQtt()>cart.getProduct().getQtt()){
                cart.setQtt(cart.getProduct().getQtt());
                iCartRepository.save(cart);
            }
        }
        return list;
    }
}
