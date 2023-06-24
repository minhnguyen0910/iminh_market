package com.example.minhmarket.model;

import antlr.collections.List;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import java.awt.*;

@Entity
@Table(name = "role_user")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_role")
    Integer id;
    @Column(name = "name_role")
    @Enumerated(EnumType.STRING)
    RoleName name;

    public Role() {
    }

    public Role(Integer id, RoleName name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public RoleName getName() {
        return name;
    }

    public void setName(RoleName name) {
        this.name = name;
    }
}
