package com.example.login_auth.config;

import io.github.cdimascio.dotenv.Dotenv;

public class DotenvConfig {
    
    public Dotenv dotenv() {
        return Dotenv.load();
    }
}
