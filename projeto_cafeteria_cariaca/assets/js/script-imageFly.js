// imageFly.js

function animateImageFlying(productImage, flyingImage) {
    // Obtém as posições da imagem original e do carrinho
    const imageRect = productImage.getBoundingClientRect();
    const cartIcons = document.querySelectorAll('.cart-pay');

    cartIcons.forEach(cartIcon => {
        const cartRect = cartIcon.getBoundingClientRect();

        // Define a posição inicial da imagem clonada
        flyingImage.style.position = 'fixed';
        flyingImage.style.left = `${imageRect.left}px`;
        flyingImage.style.top = `${imageRect.top}px`;
        flyingImage.style.width = `${imageRect.width}px`;
        flyingImage.style.height = `${imageRect.height}px`;
        flyingImage.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
        flyingImage.style.zIndex = '1000';

        // Calcula a distância para a animação
        let translateX = cartRect.left - imageRect.left;
        let translateY = cartRect.top - imageRect.top;

        // Ajusta translateY para compensar a altura da navbar fixa
        const navbar = document.querySelector('.navbar-container');
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
        translateY -= navbarHeight;

        // Inicia a animação após um pequeno atraso para garantir que o estilo inicial seja aplicado
        setTimeout(() => {
            flyingImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(0.1)`;
            flyingImage.style.opacity = '0';
        }, 100); // 100ms de atraso

        // Remove a imagem clonada após a animação
        flyingImage.addEventListener('transitionend', () => {
            flyingImage.remove();
        });
    });
}

// Adiciona eventos de clique aos botões "Adicionar ao Carrinho"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Previna o comportamento padrão

        // Clona a imagem do produto
        const productImage = e.target.closest('.boxcard').querySelector('.product-image');
        const flyingImage = productImage.cloneNode(); // Clona a imagem

        // Adiciona a imagem clonada ao body
        document.body.appendChild(flyingImage);

        // Executa a animação
        animateImageFlying(productImage, flyingImage);
    });
});