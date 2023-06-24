package com.example.minhmarket.repository;

import com.example.minhmarket.model.Cart;
import com.example.minhmarket.model.IdCart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICartRepository extends JpaRepository<Cart, IdCart> {
    List<Cart> findByCustomer_Account_Name(String nameAcc);
}
