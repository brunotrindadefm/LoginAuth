package com.example.login_auth.dto;

import jakarta.validation.constraints.*;

public record LoginRequestDto(
        @NotBlank(message = "E-mail is required") @Email(message = "Invalid e-mail format") @Size(min = 7, max = 100, message = "E-mail must be between 7 and 100 characters") String email,
        @NotBlank(message = "Password is required") @Size(min = 6, message = "Password must be at least 6 characters") @Pattern(regexp = "^(?=.*[A-Z])(?=.*\\d).+$", message = "Password must contain at least one capital letter and one number") String password) {
}
