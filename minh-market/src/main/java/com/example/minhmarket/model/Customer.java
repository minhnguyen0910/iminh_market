package com.example.minhmarket.model;

import javax.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_customer")
    Integer id;
    @Column(name = "name_customer")
    String name;
    @Column(name = "email")
    String email;
    @Column(name = "phone")
    String phone;
    @OneToOne
    @JoinColumn(name = "id_account")
    Account account;

    public Customer() {
    }

    public Customer(Integer id, String name, String email, String phone, Account account) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.account = account;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
