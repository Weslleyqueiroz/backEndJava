//cart
let cartIcon = document.querySelector('#open-cart')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')


//abre o carrinho quando clicar
cartIcon.onclick=() =>{
    cart.classList.add("active")
}

//fecha o carrinho quando clicar
closeCart.onclick=() =>{
    cart.classList.remove("active")
}


//adicionando js no carrinho
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

//funnção
function ready(){
    //removendo itens do carrinho
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    //mudando a quantidade do valor do carrinho
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change' , quantityChanged);

    }
    //adicionando no carrinho
    var addCart = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i]
        button.addEventListener('click', addCartClicked);
    }
    //botao de comprar

    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
}

function buyButtonClicked (){
    alert('Compra Efetuada Com sucesso')
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}


//removendo itens do carrinho
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}
//mudando a quantidade
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value)|| input.value <=  0){
        input.value = 1;
    }
    updateTotal();
}

//adicionando no carrinho
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;


    var priceElement = shopProducts.getElementsByClassName('price')[0];
    var price = priceElement.childNodes[0].textContent.trim(); // Esse é o preço com desconto (primeiro valor)
    
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;

    // Verificando se o item já existe no carrinho
    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg){
    // Verificando se o item já está no carrinho
    var cartItens = document.getElementsByClassName("cart-content")[0];
    var cartItensNames = cartItens.getElementsByClassName("cart-product-title");

    for (var i = 0; i < cartItensNames.length; i++) {
        console.log("Item no carrinho:", cartItensNames[i].innerText.trim());
        console.log("Título do produto:", title.trim());
        // Verificando se o item já existe no carrinho
        if (cartItensNames[i].innerText.trim() === title.trim()) {
            alert("Esse item já está no carrinho.");
            return; // Se o item já estiver no carrinho, não adiciona novamente
    }
}

var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box'); // Adicionando a classe 'cart-box' à nova div

    // Criando o conteúdo HTML do item
    var cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>
    `;

    // Definindo o conteúdo HTML para a div 'cartShopBox'
    cartShopBox.innerHTML = cartBoxContent;

    // Adicionando o item à lista de itens do carrinho
    cartItens.append(cartShopBox);

    // Adicionando os eventos de remover item e mudar a quantidade
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}



// Removendo item do carrinho
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// Mudando a quantidade do item no carrinho
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

// Atualizando o total da compra
function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];   
        var price = parseFloat(priceElement.innerText.replace("R$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    // se o item que vendemos tiver decimal
    total = Math.round(total * 100) / 100; // Arredondando para 2 casas decimais

    // Atualizando o preço total no carrinho
    document.getElementsByClassName('total-price')[0].innerText = 'R$' + total;
}
