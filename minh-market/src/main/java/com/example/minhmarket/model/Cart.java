package com.example.minhmarket.model;

import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.*;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "cart")
public class Cart {
    @EmbeddedId
    IdCart idCart;
    @ManyToOne
    @MapsId("idProduct")
    @JoinColumn(name = "id_product")
    Product product;

    @ManyToOne
    @MapsId("idCustomer")
    @JoinColumn(name = "id_customer")
    Customer customer;
    @Column(name = "qtt")
    Integer qtt;
    @Column(name = "price")
    Double price;
    @Column(name = "date_buy")
    LocalDate date;
    @Column(name = "status")
    Integer status;

    public Cart() {
    }

    public Cart(IdCart idCart, Product product, Customer customer, Integer qtt, Double price, LocalDate date, Integer status) {
        this.idCart = idCart;
        this.product = product;
        this.customer = customer;
        this.qtt = qtt;
        this.price = price;
        this.date = date;
        this.status = status;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public IdCart getIdCart() {
        return idCart;
    }

    public void setIdCart(IdCart idCart) {
        this.idCart = idCart;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Integer getQtt() {
        return qtt;
    }

    public void setQtt(Integer qtt) {
        this.qtt = qtt;
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
}
