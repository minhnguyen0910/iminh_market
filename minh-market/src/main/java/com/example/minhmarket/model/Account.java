package com.example.minhmarket.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "account")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_account")
    Integer id;
    @Column(name = "name_account")
    String name;
    @Column(name = "password")
    String passWord;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "account_role",
            joinColumns = @JoinColumn(name = "id_account"),
            inverseJoinColumns = @JoinColumn(name = "id_role"))
    Set<Role> roleAccount=new HashSet<>();

    public Account() {
    }

    public Account(Integer id, String name, String passWord, Set<Role> roleAccount) {
        this.id = id;
        this.name = name;
        this.passWord = passWord;
        this.roleAccount = roleAccount;
    }

    public Account(String name, String passWord) {
        this.name = name;
        this.passWord = passWord;
    }

    public Set<Role> getRoleAccount() {
        return roleAccount;
    }

    public void setRoleAccount(Set<Role> roleAccount) {
        this.roleAccount = roleAccount;
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

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }
}
