document.addEventListener("DOMContentLoaded", function() {

    // função para quando clicar em continuar e validar os dados
    function continuar(event) {
        event.preventDefault(); // Impede o envio do formulário

        // para pegar os dados
        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const number = document.getElementById("numero").value;
        const password = document.getElementById("senha").value;

        // verificando se o gênero foi escolhido
        const gender = document.querySelector('input[name="gender"]:checked');

        // Validação do formulário
        if (!firstname || !lastname || !email || !number || !password || !gender) {
            alert("Por favor, preencha todos os campos.");
            return; // se o cara não completar os dados, ele vai ficar dando alerta pra completar
        }

        
        const formData = {
            nome: firstname,
            sobrenome: lastname,
            email: email,
            numero: number,
            senha: password,
            gender: gender.value
        };

        // Realizando a requisição POST para o backend
        fetch("/cadastrar", { // Ajuste o endpoint conforme a sua rota
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Se o cadastro for bem-sucedido, redireciona
                window.location.href = "/";
            } else {
                alert("Erro ao cadastrar, tente novamente.");
            }
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Erro na comunicação com o servidor.");
        });
    }

    // Adicionando evento de clique ao botão de continuar
    const continueButton = document.getElementById("continueButton");
    if (continueButton) {
        continueButton.addEventListener("click", continuar); // chamando a função para validar e continuar
    }

});
