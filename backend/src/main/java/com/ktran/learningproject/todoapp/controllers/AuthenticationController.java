package com.ktran.learningproject.todoapp.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @GetMapping(path = "/basicauth")
    public String basicAuthCheck() {
        return "Success";
    }
}
