// cartCounter.js

let cartItemCount = 0;

// Função para atualizar o contador
function updateCartCounter() {
    const itemCounts = document.querySelectorAll('.item-count');
    itemCounts.forEach(el => {
        el.textContent = cartItemCount;
    });
}

// Função para adicionar ao carrinho
function addToCart(event) {
    event.preventDefault(); // Previne o comportamento padrão do link

    // Seleciona o botão clicado
    const clickedButton = event.currentTarget;

    // Encontra a imagem do produto dentro do mesmo boxcard
    const boxCard = clickedButton.closest('.boxcard');
    if (!boxCard) return; // Segurança para evitar erros

    const productImage = boxCard.querySelector('.product-image');
    if (!productImage) return; // Segurança para evitar erros

    // Clona a imagem do produto e chama a função de voo
    const flyingImage = productImage.cloneNode(true);
    flyingImage.classList.add('flying-image');

    // Adiciona a imagem clonada ao body
    document.body.appendChild(flyingImage);

    // Chama a função para animar a imagem
    animateImageFlying(productImage, flyingImage);

    // Atualiza o contador de itens
    cartItemCount++;
    updateCartCounter();

    // Animação no ícone do carrinho
    const cartIcons = document.querySelectorAll('.cart-pay');
    cartIcons.forEach(icon => {
        icon.classList.add('added');
        setTimeout(() => {
            icon.classList.remove('added');
        }, 600);
    });

    // Animação no botão clicado
    clickedButton.classList.add('clicked');
    setTimeout(() => {
        clickedButton.classList.remove('clicked');
    }, 300);
}

// Adiciona event listeners a todos os botões com a classe 'add-to-cart' após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});
