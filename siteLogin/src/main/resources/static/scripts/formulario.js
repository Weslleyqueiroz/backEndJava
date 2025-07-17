// /scripts/formulario.js

document.addEventListener("DOMContentLoaded", () => {
    // Seleciona o formulário de cadastro pelo ID
    const cadastroForm = document.getElementById("cadastroForm");
    const mensagemErro = document.getElementById("mensagemErro");
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    // Adiciona um 'listener' para o evento de 'submit' do formulário
    if (cadastroForm) { // Verifica se o formulário existe na página
        cadastroForm.addEventListener("submit", async (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário (que recarregaria a página)

            // Limpa mensagens anteriores
            mensagemErro.textContent = "";
            mensagemSucesso.textContent = "";

            // Coleta os dados dos campos do formulário usando os IDs dos inputs
            const nome = document.getElementById("firstname").value; // Usa o ID 'firstname' para o 'nome' do usuário
            const sobrenome = document.getElementById("lastname").value; // Usa o ID 'lastname' para o 'sobrenome' do usuário
            const email = document.getElementById("email").value;
            const numero = document.getElementById("numero").value;
            const senha = document.getElementById("senha").value; // Usa o ID 'senha' para a 'senha' do usuário

            // Coleta o valor do gênero selecionado (radio button)
            const selectedGender = document.querySelector('input[name="gender"]:checked');
            const gender = selectedGender ? selectedGender.value : ''; // Pega o valor, ou vazio se nada selecionado

            // Cria um objeto com os dados para enviar como JSON
            // As chaves (nome, sobrenome, email, numero, senha, gender) DEVEM corresponder exatamente
            // aos nomes das propriedades (fields) no seu modelo Usuario.java
            const formData = {
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                numero: numero,
                senha: senha,
                gender: gender,
                // A 'role' geralmente não vem do frontend, mas é definida no backend.
                // Se você quiser definir uma role padrão aqui para o cadastro (ex: "USER"),
                // você pode adicionar, mas o ideal é que o backend defina a role para segurança.
                // role: "USER" // Exemplo: se o backend espera isso para usuários novos
            };

            console.log("Dados a serem enviados:", formData);

            try {
                // Realiza a requisição POST para o endpoint /cadastrar do seu backend
                // Use o endereço completo do seu backend. Se estiver rodando localmente na porta 8080.
                const response = await fetch("http://localhost:8081/cadastrar", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData), // Converte o objeto JavaScript para JSON string
                });

                console.log("Status da resposta:", response.status);
                console.log("Content-Type:", response.headers.get("content-type"));

                // Tenta ler a resposta como texto primeiro, caso não seja JSON
                const textResponse = await response.text();
                console.log("Corpo da resposta (texto):", textResponse);

                let data;

                try {
                    data = JSON.parse(textResponse);
                } catch (e) {

                    mensagemErro.textContent = "Erro inesperado do servidor. Resposta não é JSON.";
                    console.error("Erro ao fazer parse da resposta JSON:", e);
                    return;
                }


                if (!response.ok) {

                    mensagemErro.textContent = data.message || "Erro no cadastro. Por favor, tente novamente.";
                    console.error("Erro no cadastro:", data.message || "Erro desconhecido");
                    return;
                }


                mensagemSucesso.textContent = "Cadastro realizado com sucesso! Redirecionando...";
                console.log("Cadastro realizado com sucesso:", data);


                setTimeout(() => {
                    window.location.href = "/login";
                }, 2000);

            } catch (error) {

                mensagemErro.textContent = "Erro de conexão. Verifique sua rede ou o servidor.";
                console.error("Erro ao enviar requisição de cadastro:", error);
            }
        });
    } else {
        console.error("Formulário com ID 'cadastroForm' não encontrado.");
    }
});