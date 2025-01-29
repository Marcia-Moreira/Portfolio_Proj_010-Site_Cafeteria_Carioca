// menu.js

// Seleciona o botão hamburger e a navegação
const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav');

// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.nav__list a');

// Função para alternar o menu
hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Adiciona event listeners a cada link de navegação
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Verifica se a tela é menor ou igual a 750px
        if (window.innerWidth <= 750) {
            navMenu.classList.remove('active');
        }
    });
});
