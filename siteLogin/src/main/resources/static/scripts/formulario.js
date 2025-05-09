
    // função pra quando clicar em continuar quando terminar os dados levar pra pagina
    function continuar() {
        // pra pegar os dados
        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const number = document.getElementById("number").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        
        // vericando se o genero foi escolhido
        const gender = document.querySelector('input[name="gender"]:checked');
        
        // Validação do formulário
        if (!firstname || !lastname || !email || !number || !password || !confirmPassword || !gender) {
            alert("Por favor, preencha todos os campos.");
            return; // se o cara n completar os dados ele vai ficar dando alerta pra completar
        }
        

        if (password !== confirmPassword) {
            alert("As senhas não coincidem.");
            return; // se a senha dele n for igual ele vai falar pra colocar uma senha igual
        }

        // armazenamento dos dados
        localStorage.setItem("firstname", firstname);
        localStorage.setItem("lastname", lastname);
        localStorage.setItem("email", email);
        localStorage.setItem("number", number);
        localStorage.setItem("gender", gender.value); // Corrigido para pegar o valor correto

        // redirecionamento pra pagina
        window.location.href = "index.html";
    }

    // clique do botao continuar
    document.getElementById("continueButton").addEventListener("click", function(event) {
        event.preventDefault();
        continuar(); // chamando a função dnv pra validar e continuar
    });

