package com.example.minhmarket.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "type_product")
public class TypeProduct {
    @Id
    @Column(name = "id_type_product")
    Integer id;
    @Column(name = "name_type_product")
    String name;

    public TypeProduct() {
    }

    public TypeProduct(Integer id, String name) {
        this.id = id;
        this.name = name;
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
}
