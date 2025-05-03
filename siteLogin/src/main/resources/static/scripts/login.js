document.addEventListener("DOMContentLoaded", function() {
    // botao de login
    const loginButton = document.querySelector(".btn");
    
    loginButton.addEventListener("click", function(event) {
        event.preventDefault();  // Impede o envio do formulário

        // pegando os dados
        const username = document.querySelector("input[type='text']").value;
        const password = document.querySelector("input[type='password']").value;

        // dados
        const validUsername = "usuario@example.com";
        const validPassword = "senha123";

        // Verificar se os campos estão preenchidos
        if (!username || !password) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Verificar se os dados do usuário estão corretos
        if (username === validUsername && password === validPassword) {
            // se tiver certo vai pro index
            alert("Login bem-sucedido!");
            window.location.href = "index.html";  
        } else {
            // se errar alguma coisa...
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "E-mail ou senha incorretos. Tente novamente.";
            errorMessage.style.color = "red";
            errorMessage.style.textAlign = "center";
            const formElement = document.querySelector("form");
            formElement.appendChild(errorMessage);
        }
    });
});
