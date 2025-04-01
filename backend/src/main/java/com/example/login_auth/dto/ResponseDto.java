package com.example.login_auth.dto;

import com.example.login_auth.domain.user.User;

public record ResponseDto (User user, String token) {

}
