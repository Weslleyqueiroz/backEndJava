package br.siteLogin.siteLogin.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import br.siteLogin.siteLogin.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

    
    Optional<Usuario> findById(Long id);

  
    Optional<Usuario> findByEmail(String email);

    @Query(value = "SELECT * FROM sitelogin.usuario WHERE email = :email AND senha = :senha", nativeQuery = true)
    public Usuario login(String email, String senha);
}
