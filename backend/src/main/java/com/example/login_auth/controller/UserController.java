package com.example.login_auth.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class UserController {

    public ResponseEntity<String> getUser() {
        return ResponseEntity.ok("Sucesso!");
    }
}
