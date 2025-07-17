package br.siteLogin.siteLogin.controller; // Pode deixar aqui por enquanto, mas considere mover para 'config'

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController; // <<== AQUI!
import org.springframework.web.bind.annotation.CrossOrigin;

import br.siteLogin.siteLogin.model.Usuario;
import br.siteLogin.siteLogin.repository.UsuarioRepository;

import java.util.HashMap;
import java.util.Map;

@RestController // <<== AQUI! Certifique-se de que é @RestController, NÃO @Controller
@CrossOrigin(origins = "http://localhost:8081") // Ajuste a porta se o frontend estiver em outra
public class CadastrarController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/cadastrar")
    public ResponseEntity<Map<String, String>> cadastrarUsuario(@RequestBody Usuario usuario) { // <<== AQUI! @RequestBody e ResponseEntity
        Map<String, String> response = new HashMap<>();

        if (usuarioRepository.findByEmail(usuario.getEmail()).isPresent()) {
            response.put("message", "Email já cadastrado!");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }

        usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));
        usuario.setRole("USER");

        usuarioRepository.save(usuario);

        response.put("message", "Usuário cadastrado com sucesso!");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}