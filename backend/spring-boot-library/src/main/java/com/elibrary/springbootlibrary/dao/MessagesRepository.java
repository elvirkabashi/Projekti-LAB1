package com.elibrary.springbootlibrary.dao;

import com.elibrary.springbootlibrary.entity.Messages;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.data.domain.Pageable;




public interface MessagesRepository extends JpaRepository<Messages,Long> {

    Page<Messages> findByUserEmail (@RequestParam("user_email")String userEmail, Pageable pageable);
}
