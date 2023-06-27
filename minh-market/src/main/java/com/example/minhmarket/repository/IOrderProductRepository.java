package com.example.minhmarket.repository;

import com.example.minhmarket.model.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderProductRepository extends JpaRepository<OrderProduct,Integer> {
}
