package br.siteLogin.siteLogin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

	@GetMapping("/index")
	public String index() {
		return "index";
	}

	// Adicione ou confirme que este método existe para tratar a URL raiz
	@GetMapping("/")
	public String rootIndex() {
		return "index"; // Retorna a mesma view "index"
	}

}