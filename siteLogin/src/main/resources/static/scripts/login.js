// login.js
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("#loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const email = document.querySelector("input[name='email']").value;
        const senha = document.querySelector("input[name='senha']").value;
        
        const validEmail = "usuario@example.com";
        const validSenha = "senha123";
        
        if (email === validEmail && senha === validSenha) {
            window.location.href = "index.html";
        } else {
            document.getElementById("error-message").style.display = "block";
        }
    });

    document.querySelector("#search-box").addEventListener("click", function() {
        const searchContainer = document.getElementById("search-container");
        searchContainer.style.display = searchContainer.style.display === "none" ? "block" : "none";
    });
});
