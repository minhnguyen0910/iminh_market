package com.example.minhmarket.repository;

import com.example.minhmarket.model.IdOrderDetail;
import com.example.minhmarket.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail, IdOrderDetail> {
}
