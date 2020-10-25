
// // =============== OUTERHTML, INNERHTML E INNERTEXT ===============
// //Propriedades que retornam uma string contendo o html ou texto. 
// //É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.

// const h1 = document.querySelector('h1')

// const animaisLista = document.querySelector('.animais-descricao');
// console.log(h1.innerText)       // retorna somente o texto
// console.log(h1.innerHTML)       // retorna o html interno
// console.log(h1.outerHTML)       // retorna todo o html do elemento

// // h1.innerHTML = '<p>Novo Título</p>'       //elemento dentro do conteudo
// // h1.outerHTML = '<p>Novo Título</p>'       // ele susubstitui o elemento 


// // =============== TRANSVERSING ===============
// const lista = document.querySelector('.animais-lista');
// console.log(lista)                                    // retorna ul 
// console.log(lista.parentElement)                      // pai - retorna a secao que está envolvido o ul
// console.log(lista.parentElement.parentElement)        // pai do pai - retorna o body

// console.log(lista.nextElementSibling)                 // retorna o próximo elemento 
// console.log(lista.previousElementSibling)             // retorna o elemento anterior 

// console.log(lista.children)                           // retorna um HTML Collection(array) com os filhos
// console.log(lista.children[0])                        // retorna o primeiro filho
// console.log(--lista.children.length)                  // retorna o último filho
// console.log(lista.querySelector('li:last-child'))     // retorna o último filho


// // =============== ELEMENT VS NODE ===============
// //Element's representam um elemento html, ou seja, uma tag. 
// //Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.

// console.log(lista.childNodes)                         // retorna todos os node child
// console.log(lista.firstChild)                         // retorna o primeiro node child
// console.log(lista.previousSibling)                    // retorna o node anterior


// // =============== MANIPULANDO ELEMENTOS ===============
// // É possível mover elementos no dom com métodos de Node.

// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato')
// const titulo = contato.querySelector('.titulo')



// animais.appendChild(titulo)               // moveu o contato(como ultimo filho) para dentro da secao animais

// contato.insertBefore(animais, titulo);    // insere a lista antes de titulo

// contato.removeChild(titulo); // remove titulo de contato

// const mapa = document.querySelector('mapa');
// contato.replaceChild(lista, titulo); // substitui titulo por lista


// // =============== NOVOS ELEMENTOS ===============
// //Podemos criar novos elementos com o método createElement()

// const novoh1 = document.createElement('h1')        // criando o elemento
// novoh1.innerText = 'Novo Título';                  // adicionando um texto
// novoh1.classList.add('titulo')                     // adicionando uma classe

// mapa.appendChild(novoh1)                           // inserindo no HTML
// console.log(novoh1)


// =============== CLONAR ELEMENTOS ===============
//Todo elemento selecionado é único. 
//Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

// const h1 = document.querySelector('h1')
// // const faq = document.querySelector('.faq')

// const cloneH1 =h1.cloneNode(true)             // o true sinaliza para incluir os filhos 

// cloneH1.classList.add('azul')
// faq.appendChild(cloneH1)


// =============== EXERCÍCIOS ===============

// Duplique o menu e adicione ele em copy

// 1 - selecionando os elementos
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

// 2 - clonando
const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq')
const primeiroDt =  faq.querySelector('dt');

// Selecione o DD referente ao primeiro DT

const proximoDD = primeiroDt.nextElementSibling;

console.log(proximoDD);

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;