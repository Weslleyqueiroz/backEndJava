package br.siteLogin.siteLogin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan; // Importe esta

@SpringBootApplication
@ComponentScan(basePackages = {"br.siteLogin.siteLogin", "br.siteLogin.siteLogin.config"}) // Adicione esta linha
public class SiteLoginApplication {

	public static void main(String[] args) {
		SpringApplication.run(SiteLoginApplication.class, args);
	}

}