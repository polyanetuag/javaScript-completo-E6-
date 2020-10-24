
// =============== ADDEVENTLISTENER ===============

const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
// img.addEventListener('click', () => {
//   console.log('Clicou');
// })


// =============== CALLBACK ===============
// É boa prática separar a função de callback do addEventListener, ou seja, 
//declarar uma função ao invés de passar diretamente uma função anônima

function callback() {
  console.log('Clicou');
}
// img.addEventListener('click', callback)


// =============== EVENT ===============

function callback(event) {
  console.log(event)
}


// =============== PROPRIEDADES DO EVENT ===============
const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget)          // retorna toda a lista de animais
  console.log(event.target)                 // retorna a lista e a imagem selecionada
  console.log(event.type)                 // retorna o tipo de evento(no caso, uma string)
}

animaisLista.addEventListener('click', callbackLista);


// =============== EVENT.PREVENTDEFAULT() ===============
const linkExterno = document.querySelector('a[hrefˆ="http"]');

function handlelinkExterno(event) {
  event.preventDefault();
  console.log(event);
}

// linkExterno.addEventListener('click', handlelinkExterno);


// =============== THIS ===============
//A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. 
//No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.
function handlelinkExterno(event) {
  event.preventDefault();
  // console.log(event);
  console.log(this.getAttibute('href'));
}

//Geralmente igual ao event.currentTarget


// =============== DIFERENTES EVENTOS ===============
const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event)
}

// h1.addEventListener('click', handleEvent);              //dispara ao clicar 
// h1.addEventListener('mouseenter', handleEvent);          // ao entrar na area do objeto
// h1.addEventListener('mousemove', handleEvent);           // ao mover na area do objeto

// window.addEventListener('scroll', handleEvent)          // evento geral
// window.addEventListener('resize', handleEvent)          // evento geral
window.addEventListener('keydown', handleKeyboard)          // evento geral


// =============== KEYBOARD ===============
//adicionar atalhos

function handleKeyboard(event) {
  if(event.key === 'f') {
    document.body.classList.toggle('fullscreen')
  }
  
}


// =============== FOREACH E EVENTOS ===============
//O método addEventListener é adicionado à um único elemento,
// então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.

const imgs = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.currentTarget.getAttribute('src'))
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg)
})




// =============== EXERCÍCIO ===============

// Quando o usuário clicar nos links internos do site,

const linksInternos = document.querySelectorAll('a[hrefˆ="#"]');
// adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. 
//Previna o comportamento padrão desses links

function handleLink(event) {
  event.preventDefault();       //previne o comportamento
  linksInternos.forEach((link) => {
    link.classList.remove('ativo')                  // remove a classe ativo
  })
  event.currentTarget.classList.add('ativo')        // adiciona a classe ativo
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink);
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *')    // todos os elementos dentro do body

function handleElemento(event) {
  console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function handleElemento(event) {
//   event.currentTarget.remove();         // remove os elementos
// }

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(event) {
  console.log(event.key)
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior')     // document=body; documentElement=html
  }
}

window.addEventListener('keydown', handleClickT);