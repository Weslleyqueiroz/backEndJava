function continuar(event) {
    // Pegando os dados do formulário
    const firstname = document.getElementById("nome").value;
    const lastname = document.getElementById("sobrenome").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("numero").value;
    const password = document.getElementById("senha").value;
    const gender = document.querySelector('input[name="gender"]:checked'); // Aqui estamos pegando o gênero selecionado

    // Validação dos campos
    if (!firstname || !lastname || !email || !number || !password || !gender) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação de email com regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    // Validação de número (exemplo de formato simples)
    const phoneRegex = /^[0-9]{10,11}$/; // Número com 10 ou 11 dígitos
    if (!phoneRegex.test(number)) {
        alert("Por favor, insira um número de telefone válido.");
        return;
    }

    // NÃO armazene a senha em localStorage
    // Armazenando informações não sensíveis
    localStorage.setItem("nome", firstname);
    localStorage.setItem("sobrenome", lastname);
    localStorage.setItem("email", email);
    localStorage.setItem("numero", number);
    localStorage.setItem("genero", gender.value);

    // Redirecionamento
    window.location.href = "/"; // Redireciona para a página inicial
    event.preventDefault();  // Previne o envio do formulário
}

// Clique do botão 'Continuar'
document.getElementById("continueButton").addEventListener("click", function(event) {
    continuar(event); // Passando o evento como parâmetro
});
