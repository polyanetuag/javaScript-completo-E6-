function dividir(a, b) {
   return a / b;
}

const somar = (a, b) => a + b;

console.log(somar(3, 2))

const instrumento = 'Violão';

(() => {
  const instrumento = 'Guitarra'
  console.log(instrumento)        // retorna guitarra
})();

console.log(instrumento)          // retorna violão


// ================ EXERCICIOS =================

// Remova o erro 
const priceNumber = n => +n.replace('R$', '').replace(',', '.');

console.log(priceNumber('R$ 99,99'));     // estava chamanado antes da função

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(function() {
  const nome = 'Luís'
  console.log(nome);
})();                   // função que executa e é chamada por ela mesma no final



// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(function() {
  console.log('teste de active');
});
