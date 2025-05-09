package br.siteLogin.siteLogin.controller;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SecurityConfig {


	    @Bean
	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	        http
	            .csrf(csrf -> csrf.disable()) // 
	            .authorizeHttpRequests(auth -> auth
	             
	                .requestMatchers(
	                    "/css/**",
	                    "/js/**",
	                    "/images/**",
	                    "/pictures/**",
	                    "/fonts/**",
	                    "/webjars/**"
	                ).permitAll()
	                
	              
	                .requestMatchers(
	                    "/",
	                    "/login",
	                    "/formulario",
	                    "/error" 
	                ).permitAll()
	                
	                
	                .anyRequest().authenticated()
	            )
	            .formLogin(login -> login
	                .loginPage("/login")
	                .defaultSuccessUrl("/")
	                .permitAll()
	            )
	            .logout(logout -> logout
	                .logoutSuccessUrl("/login?logout")
	                .permitAll()
	            );
	        
	        return http.build();
	    }
	}

