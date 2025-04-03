package com.example.login_auth.dto;

import jakarta.validation.constraints.*;

public record RegisterRequestDto(
        @NotBlank(message = "E-mail is required") @Email(message = "Invalid e-mail format") @Size(min = 7, max = 100, message = "E-mail must be between 7 and 100 characters") String email,

        @NotBlank(message = "Password is required") @Size(min = 6, message = "Password must be at least 6 characters") @Pattern(regexp = "^(?=.*[A-Z])(?=.*\\d).+$", message = "Password must contain at least one capital letter and one number") String password,

        @NotBlank(message = "Name is required") @Size(min = 3, max = 50, message = "Name must be between 3 and 50 characters") String name,

        @NotBlank(message = "Password confirmation is required") String confirmPassword) {
            
    public boolean isPasswordMatching() {
        return password != null && password.equals(confirmPassword);
    }
}
