package com.example.login_auth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class LoginAuthApplication {

        private static final String[] REQUIRED_ENV_VARS = {
                        "DB_URL", "DB_USER", "DB_PASSWORD", "API_SECURITY_TOKEN"
        };

        public static void main(String[] args) {
                Dotenv dotenv = Dotenv.configure().load();

                for (String var : REQUIRED_ENV_VARS) {
                        String value = dotenv.get(var);
                        if (value == null) {
                                throw new IllegalStateException("Variável faltando no .env: " + var);
                        }
                        System.setProperty(var, value);
                }

                SpringApplication.run(LoginAuthApplication.class, args);
        }

}
