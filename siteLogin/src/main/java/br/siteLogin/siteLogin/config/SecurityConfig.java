package br.siteLogin.siteLogin.config;

import br.siteLogin.siteLogin.model.UsuarioDetails; // ESTE IMPORT ESTÁ CORRETO
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

// !!! ESTA LINHA DEVE ESTAR REMOVIDA OU COMENTADA SE UsuarioService NÃO FOR O UserDetailsService !!!
// import br.siteLogin.siteLogin.service.UsuarioService;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // !!! ESTE DEVE SER O TIPO UsuarioDetails !!!
    private final UsuarioDetails usuarioDetailsService; // <<--- AQUI: Deve ser UsuarioDetails

    // !!! ESTE DEVE SER O TIPO UsuarioDetails !!!
    public SecurityConfig(UsuarioDetails usuarioDetailsService) { // <<--- AQUI: Deve ser UsuarioDetails
        this.usuarioDetailsService = usuarioDetailsService;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(
                                "/styles/**", "/scripts/**", "/pictures/**",
                                "/login", "/formulario", "/cadastrar",
                                "/", "/index", "/loja", "/sac", "/sobre"
                        ).permitAll()
                        .anyRequest().authenticated()
                )
                .formLogin(form -> form
                        .loginPage("/login")
                        .defaultSuccessUrl("/index", true)
                        .permitAll()
                )
                .logout(logout -> logout
                        .logoutUrl("/logout")
                        .logoutSuccessUrl("/login?logout")
                        .invalidateHttpSession(true)
                        .deleteCookies("JSESSIONID")
                        .permitAll()
                )
                .sessionManagement(session -> session
                        .maximumSessions(1)
                        .maxSessionsPreventsLogin(false)
                );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}