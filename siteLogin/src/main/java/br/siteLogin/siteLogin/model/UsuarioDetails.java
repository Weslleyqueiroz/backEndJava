package br.siteLogin.siteLogin.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import br.siteLogin.siteLogin.model.Usuario;

import java.util.Collection;
import java.util.Collections;

public class UsuarioDetails implements UserDetails {

    private final Usuario usuario;

    public UsuarioDetails(Usuario usuario) {
        this.usuario = usuario;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
      
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + usuario.getRole()));
    }

    @Override
    public String getPassword() {
        return usuario.getSenha();  
    }

    @Override
    public String getUsername() {
        return usuario.getEmail();  
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;  
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;  
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; 
    }

    @Override
    public boolean isEnabled() {
        return true;  
    }

    public Usuario getUsuario() {
        return usuario;
    }
}
