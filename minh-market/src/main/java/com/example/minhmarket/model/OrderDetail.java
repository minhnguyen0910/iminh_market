package com.example.minhmarket.model;

import javax.persistence.*;

@Entity
@Table(name = "order_detail")
public class OrderDetail {
    @EmbeddedId
    IdOrderDetail idOrderDetail;
    @ManyToOne
    @MapsId("idOrder")
    @JoinColumn(name = "id_order")
    OrderProduct orderProduct;
    @ManyToOne
    @MapsId("idProduct")
    @JoinColumn(name = "id_product")
    Product product;
    @Column(name = "qtt")
    Integer qtt;
    @Column(name = "price")
    Double price;

    public OrderDetail() {
    }

    public OrderDetail(IdOrderDetail idOrderDetail, OrderProduct orderProduct, Product product, Integer qtt, Double price) {
        this.idOrderDetail = idOrderDetail;
        this.orderProduct = orderProduct;
        this.product = product;
        this.qtt = qtt;
        this.price = price;
    }

    public IdOrderDetail getIdOrderDetail() {
        return idOrderDetail;
    }

    public void setIdOrderDetail(IdOrderDetail idOrderDetail) {
        this.idOrderDetail = idOrderDetail;
    }

    public OrderProduct getOrderProduct() {
        return orderProduct;
    }

    public void setOrderProduct(OrderProduct orderProduct) {
        this.orderProduct = orderProduct;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
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
}
