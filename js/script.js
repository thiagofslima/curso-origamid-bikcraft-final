
// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if(url.includes(href)) {
        link.classList.add("ativo")
    }
}

links.forEach(ativarLink);

// Ativar items do orçamento

const parametros = new URLSearchParams(location.search);

function ativarPruduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true;
    }

}

parametros.forEach(ativarPruduto);

// Perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAtribute('aria-expanded', ativa)
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
    const img = event.currentTarget;
    if(matchMedia('(min-width: 1000px)').matches) // Verifica se a tela acima de 1000px
        galeriaContainer.prepend(img); // Leva a imagem pra cima da div galeriaContainer, ordenando
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria);

// Animação
if(window.SimpleAnime)
    new SimpleAnime();