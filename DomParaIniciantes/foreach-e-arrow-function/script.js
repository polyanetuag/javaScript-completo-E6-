
// ================== ForEach ===================
// selecionar uma lista de itens do dom

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
  console.log(item);
});


// ================== Parâmetros do ForEach ===================
//O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. 
//Essa função pode receber três parâmetros: valorAtual, index e array;

const images = document.querySelectorAll('img');

images.forEach(function(item, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});


// ================== ForEach e Array ===================
// forEach é um método de Array (alguns objetos array-like possuem este método). 
//Caso não possua, o ideal é transformá-los em uma array.

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});


// ================== Arrow Function ===================
// Sintaxe curta em relação a function expression. 
//Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

// const imgs = document.querySelectorAll('img');

// imgs.forEach((item) => {
//   console.log(item);
// });


// ================== Argumentos e Parênteses =================== 

const Imgs = document.querySelectorAll('img');

// argumento único não precisa de parênteses
Imgs.forEach(item => {
  console.log(item);
});

// multiplos argumentos precisam de parênteses
Imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
Imgs.forEach(() => {
  console.log(i++);
});


// ================== Return ===================
// É possível omitir as chaves {} para uma função que retorna uma linha.

const foto = document.querySelectorAll('img');

foto.forEach(item => 
  console.log(item)
);

foto.forEach(item => console.log(item));

//Não é permitido fechar a linha com ;


// ================== EXERCÍCIOS  ===================

// Mostre no console cada parágrado do site

const paragrafos = document.querySelectorAll('p');        // quantidade de p
console.log(paragrafos);

paragrafos.forEach((item) => {                            // mostrando cada p
  console.log(item)
})

// Mostre o texto dos parágrafos no console

paragrafos.forEach((item) => {                            // mostrando cada p
  console.log(item.innerText)
})

// Como corrigir os erros abaixo:

const ImG = document.querySelectorAll('img');

ImG.forEach((item, index) => {
  console.log(item, index);
});

let n = 0;
ImG.forEach(() => {
  console.log(n++);
});

ImG.forEach(() => n++);


