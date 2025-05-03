//search
document.addEventListener('DOMContentLoaded', function(){

    let searchIcon = document.querySelector('#search-box'); //icone de busca
    let searchContainer  = document.querySelector('#search-container'); //container da barra de pesquisa
    let searchInput  = document.querySelector('#search-input'); //campo de entrada
    let searchButton  = document.querySelector('#search-btn'); //botao de busca

    //aqui ele mostra a barrra de pesquisa quando clica no icone
    searchIcon.onclick = (e) =>{
        e.preventDefault(); //evita que o link faça um scroll
        searchContainer.style.display ="block"; //mostra a barra de pesquisa
        searchInput.focus();//foca na entrada 
    };

    //funcionalidade do botao
    
    searchButton.onclick = () =>{
        let query = searchInput.value.trim();//pegando o valor q o cliente digitar
        if(query){
            alert(`Você buscou por: ${query}`);
        }else{
            alert(`Por favor, digite um termo para buscar.`);
        }
    };

    // Funcionalidade para buscar ao pressionar "Enter"
    searchInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            let query = searchInput.value.trim();
            if(query) {
                alert(`Você buscou por: ${query}`); // Aqui também você pode fazer a busca real
            } else {
                alert("Por favor, digite um termo de busca.");
            }
        }
    });
});
