package com.example.login_auth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class LoginAuthApplication {

        public static void main(String[] args) {

                Dotenv dotenv = Dotenv.configure().directory("./").ignoreIfMissing().load();

                System.setProperty("DB_URL", dotenv.get("DB_URL"));
                System.setProperty("DB_USER", dotenv.get("DB_USER"));
                System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));

                SpringApplication.run(LoginAuthApplication.class, args);
        }

}
