
package com.elibrary.springbootlibrary.service;

import com.elibrary.springbootlibrary.dao.MessagesRepository;
import com.elibrary.springbootlibrary.entity.Messages;
import com.elibrary.springbootlibrary.requestmodels.AdminQuestionRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

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

    public void  putMessage(AdminQuestionRequest adminQuestionRequest, String userEmail) throws Exception{
        Optional<Messages> message = messagesRepository.findById(adminQuestionRequest.getId());
        if(!message.isPresent()){
            throw new Exception("Message not found");
        }
        message.get().setAdminEmail(userEmail);
        message.get().setResponse(adminQuestionRequest.getResponse());
        message.get().setClosed(true);
        messagesRepository.save(message.get());


    }

}