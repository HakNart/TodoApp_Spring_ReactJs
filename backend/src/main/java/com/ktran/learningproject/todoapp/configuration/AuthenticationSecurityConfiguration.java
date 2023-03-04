package com.ktran.learningproject.todoapp.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class AuthenticationSecurityConfiguration {
    //Filter chain

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // Add filtering
        // All of these can be chained into one statement
        // Authenticate all requests
        http.authorizeHttpRequests(
                auth -> auth
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll() // Response the Http Option request in  the case of cross-origin request
                        .anyRequest().authenticated()
        );
        // Default basic authentication
        http.httpBasic(Customizer.withDefaults());
        // Configure stateless rest api
        http.sessionManagement(
                session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        );
        // Disable csrf
        http.csrf().disable();
        // Allow frames for h2-console
        http.headers().frameOptions().sameOrigin();
        return http.build();
    }
}
