package com.example.minhmarket.model;

public class CartDTO {
    String username;
    Integer idPro;
    Integer qtt;

    public CartDTO(String username, Integer idPro, Integer qtt) {
        this.username = username;
        this.idPro = idPro;
        this.qtt = qtt;
    }

    public CartDTO() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getIdPro() {
        return idPro;
    }

    public void setIdPro(Integer idPro) {
        this.idPro = idPro;
    }

    public Integer getQtt() {
        return qtt;
    }

    public void setQtt(Integer qtt) {
        this.qtt = qtt;
    }
}
