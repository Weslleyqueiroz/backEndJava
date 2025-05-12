package br.siteLogin.siteLogin.model;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import java.util.Collections;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Entity
@Table(name = "usuarios", schema = "sitelogin") 
public class Usuario  implements UserDetails{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  
    
    @NotEmpty(message = "O nome não pode estar vazio")
    @Column(nullable = false, length = 100) 
    private String nome;
    
    @NotEmpty(message = "O sobrenome não pode estar vazio")
    @Column(nullable = false, length = 100)
    private String sobrenome;
    
    @Email(message = "Deve ser um email válido")
    @NotEmpty(message = "O email não pode estar vazio")
    @Column(nullable = false, unique = true, length = 100) 
    private String email;
    
    @Column(length = 20) 
    private String numero;  
    
    @NotEmpty(message = "A senha não pode estar vazia")
    @Column(nullable = false)
    private String senha;
    
    @NotEmpty(message = "O gênero não pode estar vazio")
    @Column(nullable = false, length = 20)
    private String gender;  
    
    private String role;
    
  
    public Usuario() {
    }
    
 
    @Override
    public String toString() {
        return "Usuario [id=" + id + ", nome=" + nome + ", email=" + email + "]";
    }


	
	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public long getId() {
		return id;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(new SimpleGrantedAuthority(role));
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return email;
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
}
	
	
	
	
	
	

