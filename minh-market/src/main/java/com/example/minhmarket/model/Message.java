package com.example.minhmarket.model;

import javax.persistence.*;

@Entity
@Table(name = "message")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_message")
    Integer id;

    @Column(name = "content")
    String content;

    @ManyToOne
    @JoinColumn(name = "sender")
    Customer sender;

    @ManyToOne
    @JoinColumn(name = "receiver")
    Customer receiver;

    public Message() {
    }

    public Message(Integer id, String content, Customer sender, Customer receiver) {
        this.id = id;
        this.content = content;
        this.sender = sender;
        this.receiver = receiver;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Customer getSender() {
        return sender;
    }

    public void setSender(Customer sender) {
        this.sender = sender;
    }

    public Customer getReceiver() {
        return receiver;
    }

    public void setReceiver(Customer receiver) {
        this.receiver = receiver;
    }
}
