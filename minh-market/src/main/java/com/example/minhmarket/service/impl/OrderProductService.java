package com.example.minhmarket.service.impl;

import com.example.minhmarket.model.OrderProduct;
import com.example.minhmarket.repository.IOrderProductRepository;
import com.example.minhmarket.service.IOrderProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderProductService implements IOrderProductService {
    @Autowired
    IOrderProductRepository iOrderProductRepository;

    @Override
    public OrderProduct save(OrderProduct orderProduct) {
        return iOrderProductRepository.save(orderProduct);
    }
}
