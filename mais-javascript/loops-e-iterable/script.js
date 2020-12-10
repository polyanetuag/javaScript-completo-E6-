const frutas = ['banana', 'morango', 'uva'];
const frase = 'Isso é JavaScript';

// For...of    -> somente em objetos iteraveis
 
for(const fruta of frutas) {
  console.log(fruta)
}

// for(const char of frase) {
//   console.log(char)
// }


const buttons = document.querySelectorAll('button');

for(const btn of buttons) {
  btn.style.color = 'blue'
}

console.log(...buttons)

// For...in   -> looping em objetos enumeraveis

const carro = {
  marca: 'Toyota',
  ano: 2020,
}

for(const key in carro) {
  console.log(key, carro[key])
}

const btnUnico = document.querySelector('button');
const btnStyles = getComputedStyle(btnUnico);

for(const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`)
}


// Do...while

let i = 0;
do {
  console.log(i++)
} while(i <= 10)



//============= EXERCICIOS ===============

// Crie 4 li's na página utilizando o for...of e adicione uma classe a cada li

const itens = document.querySelectorAll('li');

for(const item of itens) {
  item.classList.add('ativo');
}


// Utilize o for...in para listar todos as propriedades e valores do objeto window

for(const windowKey in window) {
  console.log(windowKey + ': ' + window[windowKey])
}