package com.example.minhmarket.repository;

import com.example.minhmarket.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    Boolean existsByEmail(String email);
    Customer findByAccount_Name(String userName);
}
