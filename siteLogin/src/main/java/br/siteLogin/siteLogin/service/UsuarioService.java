package br.siteLogin.siteLogin.service;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.userdetails.UserDetails; // REMOVA ESTE IMPORT
// import org.springframework.security.core.userdetails.UserDetailsService; // REMOVA ESTE IMPORT
import org.springframework.stereotype.Service;
import br.siteLogin.siteLogin.model.Usuario;
import br.siteLogin.siteLogin.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    public Usuario salvarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    // Exemplo de outro método que você pode ter ou adicionar
    public Usuario buscarUsuarioPorId(Long id) {
        return usuarioRepository.findById(id).orElse(null);
    }
}