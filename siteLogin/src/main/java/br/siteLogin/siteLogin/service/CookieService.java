package br.siteLogin.siteLogin.service;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpServletRequest;

public class CookieService {

   
    public static void setCookie(HttpServletResponse response, String nome, String valor, int segundos) {
        Cookie cookie = new Cookie(nome, valor);
        cookie.setMaxAge(segundos); 
        cookie.setPath("/"); 
        cookie.setHttpOnly(true);
        cookie.setSecure(true); 
        response.addCookie(cookie); 
    }

   
    public static String getCookie(HttpServletRequest request, String nome) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals(nome)) {
                    return cookie.getValue();
                }
            }
        }
        return null;
    }
}
