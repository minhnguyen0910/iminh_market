package com.example.minhmarket.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "order_product")
public class OrderProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_order")
    Integer id;
    @Column(name = "total_price")
    Double price;
    @Column(name = "date_order")
    LocalDate date;
    @ManyToOne
    @JoinColumn(name = "id_customer")
    Customer customer;

    public OrderProduct() {
    }

    public OrderProduct(Integer id, Double price, LocalDate date, Customer customer) {
        this.id = id;
        this.price = price;
        this.date = date;
        this.customer = customer;
    }

    public OrderProduct(Double price, LocalDate date, Customer customer) {
        this.price = price;
        this.date = date;
        this.customer = customer;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
