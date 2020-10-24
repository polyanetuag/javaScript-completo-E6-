
// ================ HEIGHT E WIDTH =================

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

//Mesma coisa para o Width, clientWidth


// ================ OFFSETTOP E OFFSETLEFT =================

const listaAnimais = document.querySelector('.animais-lista');

// Distância entre o topo do elemento e o topo da página
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop)         // 267px - retorna a altura entre o topo e o elemento

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft
console.log(h2left)       // 130px


// ================ GETBOUNDINGCLIENTRECT() =================
// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.(criando tipo um retangulo)

const h2rect = primeiroh2.getBoundingClientRect();

console.log(h2rect.top);          // retorna as 'coordenadas' do objeto

if(h2rect.top < 0) {              // verificando o elemento
  console.log('Passou do elemento')
}

// pode usar de maneira específica também 
h2rect.height; // height do elemento
h2rect.width; // width do elemento
h2rect.top; // distância entre o topo do elemento e o scroll


// ================ WINDOW =================

console.log(

  window.innerWidth,     // width da janela
  window.outerWidth,     // soma dev tools também
  window.innerHeight,    // height da janela
  window.outerWidth,     // soma a barra de endereço
  
  window.pageYOffset,    // distância total do scroll horizontal
  window.pageXOffset,    // distância total do scroll vertical
  )

// ================ MATCHMEDIA(); =================
// Utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width:600px)').matches;     // se for menor que 600, retorna true; caso seja maior, retorna false
console.log(small)

if(small) {
  console.log('Usuário mobile')
} else {
  console.log('Usuário desktop')
}

// ================ DICA =================
// Selecione o elemento no inspetor (dom)

//Abra o console e digite $0 para selecionar o mesmo

//Os elementos selecionados anteriormente são $1, $2 ...


// ================ EXERCÍCIOS =================

// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector('img');

const imgTop = primeiraImagem.offsetTop;
console.log(imgTop)


// Retorne a soma da largura de todas as imagens

function somaImagens() {
const imagens = document.querySelectorAll('img');
let soma =0

imagens.forEach((imagem) => {     // como deve somar cada imagem, usar um forEach
  soma += imagem.offsetWidth
});
  console.log(soma);
}

window.onload = function() {
  somaImagens();                  // retorna 9 imagens com 82px e 1 com 335px
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  console.log(linkWidth)
  console.log(linkHeight)

  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui boa acessibilidade')
  } else {
    console.log(link, 'Não possui boa acessibilidade')
  }
});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');            // adiciona a classe quando for menor que 720px
}




