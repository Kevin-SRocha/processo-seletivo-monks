// Adicionando interatividade básica com JavaScript

document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os botões de "Comprar"
    const buyButtons = document.querySelectorAll(".produto button");

    buyButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            // Obter o nome do produto
            const productName = event.target.parentElement.querySelector("h2").textContent;

            // Exibe uma mensagem simples de confirmação
            alert(`Você adicionou o produto '${productName}' ao carrinho!`);
        });
    });

    // Função para exibir uma seção específica
    function mostrarSecao(secaoId) {
        // Oculta todas as seções principais
        const secoes = document.querySelectorAll("main section");
        secoes.forEach(secao => {
            secao.style.display = "none";
        });

        // Exibe a seção clicada
        const secaoAlvo = document.getElementById(secaoId);
        if (secaoAlvo) {
            secaoAlvo.style.display = "block";
        }
    }

    // Adiciona evento de clique aos links de navegação
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Obter o destino do link
            const targetId = link.getAttribute("href").substring(1);

            // Chama a função para mostrar a seção correspondente
            mostrarSecao(targetId);
        });
    });

    // Exibe a seção inicial (Início) ao carregar a página
    mostrarSecao("produtos");
});
