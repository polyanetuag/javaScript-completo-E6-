
// ================== COMENTÁRIOS =================

// Comentário de uma linha

/*
Comentário
com diversas
linhas
*/


// =================== OPERADORES DE ATRIBUIÇÃO ================

var x = 5;
var y = 10;
x += y;     // x = x + y (15)
x -= y;     // x = x - y (-5)
x *= y;     // x = x * y (50)
x /= y;     // x = x / y (0.5)
x %= y;     // x = x % y (0)
x **= y;    // x = x ** y (9765625)


// ================== OPERADOR TERNÁRIO ===================
// condição ? true : false

var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Pode beber

// Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição

// ===================== IF ABREVIADO ====================
// Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');


  // ======================= EXERCÍCIOS =======================

  // Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500

console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

if (possuiCarro && possuiCasa) {
  console.log('Possui bens')
} else {
  console.log('Não possui')
}

darCredito = (possuiCarro && possuiCasa)
console.log(darCredito)  