package com.example.login_auth;

import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.MapPropertySource;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class LoginAuthApplication {

        private static final String[] REQUIRED_ENV_VARS = {
                        "DB_URL", "DB_USER", "DB_PASSWORD", "API_SECURITY_TOKEN"
        };

        public static void main(String[] args) {

                try {
                        Dotenv dotenv = Dotenv.configure().directory("./").ignoreIfMissing().load();

                        ConfigurableApplicationContext context = SpringApplication.run(LoginAuthApplication.class,
                                        args);
                        ConfigurableEnvironment env = context.getEnvironment();

                        for (String var : REQUIRED_ENV_VARS) {
                                String value = dotenv.get(var);
                                if (value == null) {
                                        throw new IllegalStateException("Variável faltando no .env: " + var);
                                }
                                env.getPropertySources().addFirst(
                                                new MapPropertySource("dotenv", Map.of(var, value)));
                        }
                } catch (Exception exception) {
                        System.out.println("Error at system initialization");
                        System.exit(1);
                }
        }

}
