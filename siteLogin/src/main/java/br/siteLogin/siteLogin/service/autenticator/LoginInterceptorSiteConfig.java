package br.siteLogin.siteLogin.service.autenticator;

import java.io.IOException;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import br.siteLogin.siteLogin.service.CookieService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class LoginInterceptorSiteConfig implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {
        String requestURI = request.getRequestURI();

        if (requestURI.equals("/login")) {
            return true; 
        }

      
        if (CookieService.getCookie(request, "UsuarioId") != null) {
            return true; 
        }

  
        response.sendRedirect("/login");
        return false;
    }
}
