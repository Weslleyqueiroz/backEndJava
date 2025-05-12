document.addEventListener('DOMContentLoaded', () => {
    //cart
    const cartIcon = document.querySelector('#open-cart');
    const cart = document.querySelector('.cart');
    const closeCart = document.querySelector('#close-cart');

    // Se não encontrar os elementos do carrinho, não executa nada
    if (!cartIcon || !cart || !closeCart) return;

    //abre o carrinho quando clicar
    cartIcon.onclick = () => {
        cart.classList.add("active");
    };

    //fecha o carrinho quando clicar
    closeCart.onclick = () => {
        cart.classList.remove("active");
    };

    //adicionando js no carrinho
    ready();
});

//função
function ready() {
    //removendo itens do carrinho
    let removeCartButtons = document.getElementsByClassName('cart-remove');
    for (let button of removeCartButtons) {
        button.addEventListener('click', removeCartItem);
    }

    //mudando a quantidade do valor do carrinho
    let quantityInputs = document.getElementsByClassName('cart-quantity');
    for (let input of quantityInputs) {
        input.addEventListener('change', quantityChanged);
    }

    //adicionando no carrinho
    let addCart = document.getElementsByClassName('add-cart');
    for (let button of addCart) {
        button.addEventListener('click', addCartClicked);
    }

    //botao de comprar
    const buyBtn = document.getElementsByClassName('btn-buy')[0];
    if (buyBtn) {
        buyBtn.addEventListener('click', buyButtonClicked);
    }
}

function buyButtonClicked() {
    alert('Compra Efetuada Com sucesso');
    const cartContent = document.getElementsByClassName('cart-content')[0];
    while (cartContent && cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}

//removendo itens do carrinho
function removeCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

//mudando a quantidade
function quantityChanged(event) {
    const input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

//adicionando no carrinho
function addCartClicked(event) {
    const button = event.target;
    const shopProducts = button.parentElement;
    const title = shopProducts.getElementsByClassName('product-title')[0].innerText;

    const priceElement = shopProducts.getElementsByClassName('price')[0];
    const price = priceElement.childNodes[0].textContent.trim(); // Esse é o preço com desconto (primeiro valor)

    const productImg = shopProducts.getElementsByClassName('product-img')[0].src;

    // Verificando se o item já existe no carrinho
    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    // Verificando se o item já está no carrinho
    const cartItems = document.getElementsByClassName("cart-content")[0];
    const cartItemNames = cartItems.getElementsByClassName("cart-product-title");

    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText.trim() === title.trim()) {
            alert("Esse item já está no carrinho.");
            return;
        }
    }

    const cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box');

    // Criando o conteúdo HTML do item
    const cartBoxContent = `
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
    cartItems.append(cartShopBox);

    // Adicionando os eventos de remover item e mudar a quantidade
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}

//atualizando o total do carrinho
function updateTotal() {
    const cartContent = document.getElementsByClassName("cart-content")[0];
    const cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0;

    for (let i = 0; i < cartBoxes.length; i++) {
        const cartBox = cartBoxes[i];
        const priceElement = cartBox.getElementsByClassName("cart-price")[0];
        const quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        const price = parseFloat(priceElement.innerText.replace("R$", ""));
        const quantity = quantityElement.value;
        total = total + (price * quantity);
    }

    // se o item que vendemos tiver decimal
    total = Math.round(total * 100) / 100;

    // Atualizando o preço total no carrinho
    document.getElementsByClassName('total-price')[0].innerText = 'R$' + total;
}
