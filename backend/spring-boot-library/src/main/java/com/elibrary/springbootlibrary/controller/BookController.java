package com.elibrary.springbootlibrary.controller;

import com.elibrary.springbootlibrary.entity.Book;
import com.elibrary.springbootlibrary.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/books")
public class BookController {

    private BookService bookService;

    @Autowired
    public BookController(BookService bookService){
        this.bookService = bookService;
    }

    @GetMapping("/secure/currentloans/count")
    public int currentLoansCount(){
        String userEmail = "testuser@gmail.com";
        return bookService.currentLoansCount(userEmail);
    }


    @GetMapping("/secure/ischeckedout/byuser")
    public boolean checkoutBookByUser(@RequestParam Long bookId){
        String userEmail = "testuser@gmail.com";
        return bookService.checkoutBookByUser(userEmail,bookId);
    }

    @PutMapping("/secured/checkout")
    public Book checkoutBook(@RequestParam Long bookId)throws Exception{
        String userEmail = "testuser@gmail.com";
        return bookService.checkoutBook(userEmail,bookId);
    }
}
