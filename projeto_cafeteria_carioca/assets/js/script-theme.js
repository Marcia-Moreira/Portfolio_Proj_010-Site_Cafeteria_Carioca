// THEME - Tema Dark ou Light

document.addEventListener('DOMContentLoaded', () => {
    const trilho = document.getElementById('trilho');
    const temaTexto = document.getElementById('tema-texto');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = localStorage.getItem('theme');

    // Função para definir o tema
    const setTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            temaTexto.textContent = 'Light'; // Texto quando o tema é escuro
        } else {
            document.body.classList.remove('dark-theme');
            temaTexto.textContent = 'Dark'; // Texto quando o tema é claro
        }
        localStorage.setItem('theme', theme);
    };

    // Inicializa o tema com base na preferência do usuário ou no localStorage
    if (currentTheme === 'dark') {
        setTheme('dark');
    } else if (currentTheme === 'light') {
        setTheme('light');
    } else if (prefersDarkScheme.matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Event listener para alternar o tema ao clicar no trilho
    trilho.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        setTheme(isDark ? 'dark' : 'light');
    });
});
