document.addEventListener("DOMContentLoaded", function () {
    // Abre e fecha a barra de busca
    const searchBox = document.querySelector("#search-box");
    const searchContainer = document.getElementById("search-container");

    if (searchBox && searchContainer) {
        searchBox.addEventListener("click", function () {
            searchContainer.style.display = 
                searchContainer.style.display === "none" ? "block" : "none";
        });
    }

    // Exibe mensagem de erro se ela estiver visível na URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("error") === "true") {
        const errorMessage = document.getElementById("error-message");
        if (errorMessage) {
            errorMessage.style.display = "block";
        }
    }
});
