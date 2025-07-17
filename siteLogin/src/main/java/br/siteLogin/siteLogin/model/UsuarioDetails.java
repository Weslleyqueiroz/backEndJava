package br.siteLogin.siteLogin.model;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.siteLogin.siteLogin.model.Usuario;
import br.siteLogin.siteLogin.repository.UsuarioRepository;

@Service // <<--- Garanta que esta anotação está presente
public class UsuarioDetails implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioDetails(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado com o email: " + email));

        // Retorna um objeto UserDetails do Spring Security
        return org.springframework.security.core.userdetails.User.builder()
                .username(usuario.getEmail())
                .password(usuario.getSenha()) // A senha já deve estar encodificada no banco de dados
                .roles(usuario.getRole()) // "USER", "ADMIN", etc.
                .build();
    }
}