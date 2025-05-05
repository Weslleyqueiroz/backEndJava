package br.siteLogin.siteLogin.controller;

import java.io.UnsupportedEncodingException;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import br.siteLogin.siteLogin.service.CookieService;
import jakarta.servlet.http.HttpServletRequest;


@Controller
public class HomeController {

	@GetMapping("/home")
	public String home(Model model, HttpServletRequest request) throws UnsupportedEncodingException{
		model.addAttribute("nome", CookieService.getCookie(request, "nomeUsuario"));
		return "redirect:/";
		
	}
}
	

