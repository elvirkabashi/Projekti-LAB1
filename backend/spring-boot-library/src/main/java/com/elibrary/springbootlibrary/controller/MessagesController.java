package com.elibrary.springbootlibrary.controller;

import com.elibrary.springbootlibrary.entity.Message;
import com.elibrary.springbootlibrary.requestmodels.AdminQuestionRequest;
import com.elibrary.springbootlibrary.service.MessagesService;
import com.elibrary.springbootlibrary.utils.ExtractJWT;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("https://localhost:3000")
@RestController
@RequestMapping("/api/messages")
public class MessagesController {

    private  MessagesService messagesService;

    public MessagesController(MessagesService messagesService){
        this.messagesService=messagesService;
    }

    @PostMapping("/secure/add/message")
    public void postMessage(@RequestHeader(value = "Authorization")String token,
                            @RequestBody Message messagesRequest){

        String userEmail = ExtractJWT.payloadJWTExtraction(token,"\"sub\"");
        messagesService.postMessage(messagesRequest,userEmail);

    }

    @PutMapping("/secure/admin/message")
    public void putMessage(@RequestHeader(value="Authorization") String token,
                           @RequestBody AdminQuestionRequest adminQuestionRequest) throws Exception {
        String userEmail = ExtractJWT.payloadJWTExtraction(token, "\"sub\"");
        String admin = ExtractJWT.payloadJWTExtraction(token, "\"userType\"");
        if (admin == null || !admin.equals("admin")){
            throw new Exception("Administration page only.");
        }
            messagesService.putMessage(adminQuestionRequest, userEmail);
    }

}
