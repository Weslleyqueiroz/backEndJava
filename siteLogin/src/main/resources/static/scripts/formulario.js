const response = await fetch("/cadastrar", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
});

console.log("Status da resposta:", response.status);
console.log("Content-Type:", response.headers.get("content-type"));

const text = await response.text();
console.log("Corpo da resposta:", text);

// Agora, tenta converter para JSON e usar
let data;
try {
    data = JSON.parse(text);
} catch (e) {
    throw new Error("Resposta do servidor inválida: não é JSON");
}

if (!response.ok || !data.success) {
    throw new Error(data.message || "Erro ao cadastrar");
}

// continua seu fluxo normalmente
