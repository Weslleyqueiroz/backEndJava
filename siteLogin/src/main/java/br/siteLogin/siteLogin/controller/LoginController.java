package br.siteLogin.siteLogin.controller;

import java.io.UnsupportedEncodingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import br.siteLogin.siteLogin.model.Usuario;
import br.siteLogin.siteLogin.repository.UsuarioRepository;
import br.siteLogin.siteLogin.service.CookieService;

import org.springframework.ui.Model;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

@Controller
public class LoginController {
    
    @Autowired
    private UsuarioRepository ur;

 
    @GetMapping("/login")
    public String login(HttpServletRequest request) throws Exception {
        
        if (CookieService.getCookie(request, "UsuarioId") != null) {
            return "redirect:/"; 
        }
        return "login"; 
    }

   
    @PostMapping("/login")
    public String loginUsuario(Usuario usuario, Model model, HttpServletResponse response) throws UnsupportedEncodingException {
        
        System.out.println("Email recebido: " + usuario.getEmail());
        System.out.println("Senha recebida: " + usuario.getSenha());

        
        Usuario usuarioLogado = this.ur.login(usuario.getEmail(), usuario.getSenha());
        if (usuarioLogado != null) {
           
            CookieService.setCookie(response, "UsuarioId", String.valueOf(usuarioLogado.getId()), 10000);
            CookieService.setCookie(response, "nomeUsuario", usuarioLogado.getNome(), 10000);
            
            return "redirect:/"; 
        }

       
        model.addAttribute("erro", "Usuário ou senha inválidos!");
        return "login";
    }

   
    @GetMapping("/formulario")
    public String cadastro() {
        return "formulario";
    }

    
    @PostMapping("/formulario")
    public String cadastroUsuario(@Valid Usuario usuario, BindingResult result) {
        
        if(result.hasErrors()) {
            return "formulario"; 
        }

        ur.save(usuario); 
        System.out.println("Usuário cadastrado");
        return "redirect:/login"; 
    }
}
