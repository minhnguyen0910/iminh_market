package com.example.minhmarket.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class IdOrderDetail implements Serializable {
    @Column(name = "id_order")
    private Integer idOrder;
    @Column(name = "id_product")
    private Integer idProduct;

    public IdOrderDetail() {
    }

    public IdOrderDetail(Integer idOrder, Integer idProduct) {
        this.idOrder = idOrder;
        this.idProduct = idProduct;
    }

    public Integer getIdOrder() {
        return idOrder;
    }

    public void setIdOrder(Integer idOrder) {
        this.idOrder = idOrder;
    }

    public Integer getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Integer idProduct) {
        this.idProduct = idProduct;
    }
}
