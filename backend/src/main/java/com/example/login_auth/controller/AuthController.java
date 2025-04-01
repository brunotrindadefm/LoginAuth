package com.example.login_auth.controller;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.login_auth.domain.user.User;
import com.example.login_auth.dto.LoginRequestDto;
import com.example.login_auth.dto.RegisterRequestDto;
import com.example.login_auth.dto.ResponseDto;
import com.example.login_auth.infra.security.TokenService;
import com.example.login_auth.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDto body) {
        User user = this.userRepository.findByEmail(body.email())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (passwordEncoder.matches(user.getPassword(), body.password())) {
            String token = this.tokenService.generateToken(user);
            return ResponseEntity.ok(new ResponseDto(user, token));
        }

        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/register")
    public ResponseEntity login(@RequestBody RegisterRequestDto body) {
        Optional<User> user = this.userRepository.findByEmail(body.email());

        if(user.isEmpty()) {
            User newUser = new User();
            newUser.setPassword(passwordEncoder.encode(body.password()));
            newUser.setEmail(body.email());
            newUser.setName(body.name());
            this.userRepository.save(newUser);

            String token = this.tokenService.generateToken(newUser);

            return ResponseEntity.ok(new ResponseDto(newUser, token));
        }

        return ResponseEntity.badRequest().build();
    }
}
