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
         .csrf(csrf -> csrf.disable())
         .authorizeHttpRequests(auth -> auth
             .requestMatchers(
                 "/",
                 "/css/**",
                 "/scripts/**",
                 "/pictures/**",
                 "/login",
                 "/formulario"
             ).permitAll()
             .anyRequest().authenticated()
         )
         .formLogin(login -> login
             .loginPage("/login")
             .defaultSuccessUrl("/")
             .permitAll()
         );
     return http.build();
 }
    @Configuration
    public class StaticResourceConfig implements WebMvcConfigurer {
        @Override
        public void addResourceHandlers(ResourceHandlerRegistry registry) {
            registry
                .addResourceHandler("/css/**")
                .addResourceLocations("classpath:/static/css/");
            registry
                .addResourceHandler("/scripts/**")
                .addResourceLocations("classpath:/static/scripts/");
            registry
                .addResourceHandler("/pictures/**")
                .addResourceLocations("classpath:/static/pictures/");
        }
    }
    
}	
