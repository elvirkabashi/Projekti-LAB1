
package com.elibrary.springbootlibrary.service;

import com.elibrary.springbootlibrary.dao.MessagesRepository;
import com.elibrary.springbootlibrary.entity.Messages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class MessagesService {

    private MessagesRepository messagesRepository;

    @Autowired
    public MessagesService(MessagesRepository messagesRepository) {
        this.messagesRepository = messagesRepository;
    }

    public void postMessage(Messages messageRequest, String userEmail) {
        Messages message = new Messages(messageRequest.getTitle(), messageRequest.getQuestion());
        message.setUserEmail(userEmail);
        messagesRepository.save(message);

    }

}