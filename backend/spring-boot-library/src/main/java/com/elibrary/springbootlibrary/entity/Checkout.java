package com.elibrary.springbootlibrary.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "checkout")
@Data
public class Checkout {

    public Checkout(){}

    public Checkout(String userEmail, String checkoutDate, String returnDate,Long bookId){
        this.userEmail = userEmail;
        this.checkoutDate = checkoutDate;
        this.reurnDate = returnDate;
        this.bookId = bookId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "userEmail")
    private String userEmail;

    @Column(name = "checkout_date")
    private String checkoutDate;

    @Column(name = "return_date")
    private String reurnDate;

    @Column(name = "book_id")
    private Long bookId;
}
