var idade = 30
var num = 2e10
var num2 = 2e-2

console.log(idade)
console.log(num)
console.log(num2)


// ====== 0PERADORES ARITMÉTICOS =======

var soma = 100 + 50;                // 150
var subtracao = 100 - 50;           // 50
var multiplicacao = 100 * 2;        // 200
var divisao = 100 / 2;              // 50
var expoente = 2 ** 4;              // 16
var modulo = 14 % 5;                // 4 (resto da divisão)


// ====== 0PERADORES ARITMÉTICOS COM STRING =======

var soma = '100' + 50;              // 10050  (concatena e o valor final é uma string)
var subtracao = '100' - 50;         // 50
var multiplicacao = '100' * '2';    // 200
var divisao = 'Comprei 10' / 2;     // NaN (Not a Number)

console.log(isNaN(divisao))         // função isNan() - retorna true ou false


// ======== A ORDEM IMPORTA =========
// Começa por multiplicação e divisão, depois por soma e subtração.

var total1 = 20 + 5 * 2;            // 30
var total2 = (20 + 5) * 2;          // 50 - o uso dos parênteses tem prioridade na equação
var total3 = 20 / 2 * 5;            // 50
var total4 = 10 + 10 * 2 + 20 / 2;  // 40


// ======== OPERADORES ARITMÉTICOS UNÁRIOS =======

var incremento = 5;
console.log(incremento++);          // 5 - apos a variável, precisa de um novo console para identificar
console.log(incremento);            // 6

var incremento2 = 5;
console.log(++incremento2);         // 6 - a mudança ocorre de imediato quanto colocado antes da variável
console.log(incremento2);           // 6

var frase = 'Isso é um teste';      // Como não existe nenhum número para tranformar, retorna NaN
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33      // com o símbolo, ele faz a oeração ao invés de concatenar

var possuiFaculdade = true;
console.log(+possuiFaculdade);      // 1


// ========= EXERCÍCIOS ========== 

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total)            // retorna 35 

// Crie duas expressões que retornem NaN

var teste = 'Hoje'
+teste
console.log(+teste)

var expressao = 'Arroz' / 2
console.log(expressao)

// Somar a string '200' com o número 50 e retornar 250

var soma = +'200' + 50
console.log(soma )

// Incremente o número 5 e retorne o seu valor incrementado

var adicionar = 5
console.log(adicionar++)
console.log(adicionar)

// Como dividir o peso por 2?
var numero = +'80'/ 2;
var unidade = 'kg';
var peso = numero + unidade;        // '40kg'

console.log(peso)