package br.siteLogin.siteLogin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import br.siteLogin.siteLogin.model.Usuario;
import br.siteLogin.siteLogin.repository.UsuarioRepository;
import org.springframework.ui.Model;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;


@Controller
public class LoginController {
	
	
	
	@Autowired
	private UsuarioRepository ur;
	
	
	@GetMapping("/login")
	public String login() {
		return "login";
	}
	

	
	@PostMapping("/logar")
	public String loginUsuario(Usuario usuario, Model model, HttpServletResponse response) {
		Usuario usuarioLogado = this.ur.login(usuario.getEmail(), usuario.getSenha());
		if(usuarioLogado != null) {
			
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


