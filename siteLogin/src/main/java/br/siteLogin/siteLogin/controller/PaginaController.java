package br.siteLogin.siteLogin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PaginaController {

	@GetMapping("/")
	public String home() {
		return "index";
	}
	
	@GetMapping("/loja")
	public String loja() {
		return "loja";
	}
	
	@GetMapping("/sac")
	public String sac() {
		return "sac";
}
	
	@GetMapping("/sobre")
	public String sobre() {
		return "sobre";
	}
}
