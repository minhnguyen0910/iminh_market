package com.example.minhmarket.repository;

import com.example.minhmarket.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Integer> {
    List<Product> findAllByNameContaining(String name);
    List<Product> findByTypeProductId(Integer id);
    @Query(value = "select * from product order by price desc ",nativeQuery = true)
    List<Product> priceDesc();
    @Query(value = "select * from product order by price asc ",nativeQuery = true)
    List<Product> priceAsc();
    @Query(value = "select * from product order by name_product desc ",nativeQuery = true)
    List<Product> nameDesc();
    @Query(value = "select * from product order by name_product asc ",nativeQuery = true)
    List<Product> nameAsc();
}
