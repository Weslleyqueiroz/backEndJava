package br.siteLogin.siteLogin.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.siteLogin.siteLogin.model.Usuario;
import br.siteLogin.siteLogin.repository.UsuarioRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/cadastrar")
public class CadastrarController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping
    public ResponseEntity<?> cadastrarUsuario(@RequestBody @Valid UsuarioDTO usuarioDTO) {
        
        if (usuarioRepository.findByEmail(usuarioDTO.getEmail()).isPresent()) {
            return ResponseEntity
                .badRequest()
                .body(Map.of("success", false, "message", "Email já cadastrado"));
        }

        
        Usuario novoUsuario = new Usuario();
        novoUsuario.setNome(usuarioDTO.getNome());
        novoUsuario.setSobrenome(usuarioDTO.getSobrenome());
        novoUsuario.setEmail(usuarioDTO.getEmail());
        novoUsuario.setNumero(usuarioDTO.getNumero());
        novoUsuario.setSenha(passwordEncoder.encode(usuarioDTO.getSenha()));
        novoUsuario.setGender(usuarioDTO.getGender());
        novoUsuario.setRole("USER"); 

 
        usuarioRepository.save(novoUsuario);


        return ResponseEntity.ok(Map.of(
            "success", true,
            "message", "Usuário cadastrado com sucesso"
        ));
    }
}