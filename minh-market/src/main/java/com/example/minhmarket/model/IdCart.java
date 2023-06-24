package com.example.minhmarket.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class IdCart implements Serializable {
    @Column(name = "id_product")
    Integer idProduct;
    @Column(name = "id_customer")
    Integer idCustomer;

    public IdCart() {
    }

    public IdCart(Integer idProduct, Integer idCustomer) {
        this.idProduct = idProduct;
        this.idCustomer = idCustomer;
    }

    public Integer getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Integer idProduct) {
        this.idProduct = idProduct;
    }

    public Integer getIdCustomer() {
        return idCustomer;
    }

    public void setIdCustomer(Integer idCustomer) {
        this.idCustomer = idCustomer;
    }
}
