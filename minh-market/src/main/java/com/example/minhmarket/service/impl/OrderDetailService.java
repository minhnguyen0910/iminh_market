package com.example.minhmarket.service.impl;

import com.example.minhmarket.model.OrderDetail;
import com.example.minhmarket.repository.IOrderDetailRepository;
import com.example.minhmarket.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    IOrderDetailRepository iOrderDetailRepository;
    @Override
    public void save(OrderDetail orderDetail) {
        iOrderDetailRepository.save(orderDetail);
    }
}
