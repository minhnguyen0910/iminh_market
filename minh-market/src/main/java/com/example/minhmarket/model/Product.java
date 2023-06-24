package com.example.minhmarket.model;

import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @Column(name = "id_product")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    @Column(name = "name_product")
    String name;
    @Column(name = "qtt")
    Integer qtt;
    @Column(name = "price")
    Double price;
    @Column(name = "image")
    String image;
    @Column(name = "detail",columnDefinition = "text")
    String detail;
    @Column(name = "expiry")
    LocalDate expiry;
    @ManyToOne
    @JoinColumn(name = "id_type_product")
    TypeProduct typeProduct;

    public Product() {
    }

    public Product(Integer id, String name, Integer qtt, Double price, String image, String detail, LocalDate expiry, TypeProduct typeProduct) {
        this.id = id;
        this.name = name;
        this.qtt = qtt;
        this.price = price;
        this.image = image;
        this.detail = detail;
        this.expiry = expiry;
        this.typeProduct = typeProduct;
    }

    public LocalDate getExpiry() {
        return expiry;
    }

    public void setExpiry(LocalDate expiry) {
        this.expiry = expiry;
    }

    public TypeProduct getTypeProduct() {
        return typeProduct;
    }

    public void setTypeProduct(TypeProduct typeProduct) {
        this.typeProduct = typeProduct;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }
}
