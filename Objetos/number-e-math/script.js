
// =================== NUMBER ====================
// É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.

const ano = 2018;
const valor = new Number(99);


// =================== NUMBER.ISNAN() E NUMBER.ISINTEGER() ====================

Number.isNaN(NaN); // true          é um método de Number, ou seja, não faz parte do protótipo
Number.isNaN(4 + 5); // false

Number.isInteger(20); // true       verifica se é uma integral(num. inteiro)
Number.isInteger(23.6); // false


// =================== NUMBER.PARSEFLOAT() E NUMBER.PARSEINT() ====================

//parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. 

parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

//parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100

//Float possui decimal, Integer não.


// =================== N.TOFIXED(DECIMAIS) ====================
//Arredonda o número com base no total de casas decimais do argumento.

const preco1 = 2.99;
preco1.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2) // 1000.46

const preco2 = 1499.49;
preco2.toFixed() // 1499


// =================== N.TOSTRING(RADIX) ====================
//Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

const valor2 = 2.99;
console.log(valor2.toString(10)); // '2.99'


// =================== N.TOLOCALESTRING(LANG, OPTIONS); ====================
//Formata o número de acordo com a língua e opções passadas.

const price = 59.49;
console.log(price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})); // $59.49
console.log(price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); // R$ 59,49


// =================== MATH ====================
//É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

Math.PI // 3.14159 (pi)
Math.E // 2.718 (constante de Euler)
Math.LN10 // 2.303  (log de 10)
Math.SQRT2 // 1.414  (raiz quadrada)


// =================== MATH.ABS(), MATH.CEIL(), MATH.FLOOR() E MATH.ROUND() ====================

Math.abs(-5.5); // 5.5        retorna o valor absoluto(transforma negativo em positivo)
Math.ceil(4.8334); // 5       arredonda para cim
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4      arredonda para baixo
Math.floor(4.3); // 4
Math.round(4.8334); // 5      arredonda para o número integral(inteiro) mais próximo
Math.round(4.3); // 4


// =================== NUMBER ====================
//MATH.MAX(), MATH.MIN() E MATH.RANDOM();

Math.max(5,3,10,42,2); // 42          retorna o maior numero de uma lista de argumentos
Math.min(5,3,10,42,2); // 2           retorna o menor numero

Math.random(); // 0.XXX               retorna um numero aleatório entre 0 e 1
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
//Math.floor(Math.random() * (max - min + 1)) + min;


// =================== EXERCÍCIOS ====================

// Retorne um número aleatório
// entre 1050 e 2000

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
console.log(aleatorio)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros);        //operador spread
console.log(numeroMaximo)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];


function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2)
  return preco
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))       // Transformando em real
limparPreco(listaPrecos[1])
