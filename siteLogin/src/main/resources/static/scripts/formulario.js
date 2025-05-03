function continuar(event) {
    // Pegando os dados do formulário
    const firstname = document.getElementById("nome").value;
    const lastname = document.getElementById("sobrenome").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("numero").value;
    const password = document.getElementById("senha").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validação dos campos
    if (!firstname || !lastname || !email || !number || !password || !gender) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Não armazene senhas no localStorage!
    localStorage.setItem("nome", firstname);
    localStorage.setItem("sobrenome", lastname);
    localStorage.setItem("email", email);
    localStorage.setItem("numero", number);
    localStorage.setItem("genero", gender.value);

    // Redirecionamento
    window.location.href = "/";
    event.preventDefault();  // Previne o envio do formulário se validado corretamente
}

// Clique do botão 'Continuar'
document.getElementById("continueButton").addEventListener("click", function(event) {
    continuar(event); // Passando o evento como parâmetro
});
