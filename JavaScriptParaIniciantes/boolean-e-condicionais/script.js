// ======== BOOLEAN ========

var possuiGraduacao = true;
var possuiDoutorado = false;

// ========= CONDICIONAIS IF E ELSE ==========

var possuiGraduacao = true;

if(possuiGraduacao) {
  console.log('Possui graduação');            // retorna Possui Graduação e não executa o else
} else {
  console.log('Não possui graduação');
}

// ========= CONDICIONAIS ELSE IF ===========
// encadeamento de condições 

var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado

// ========== SWITCH ==========

// Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. 
// Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. 
// O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

var corFavorita = 'Verde';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}


// ========= TRUTHY E FALSY ===========
// Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

// Falsy
if(false)
if(0)       // ou -0
if(NaN)
if(null)
if(undefined)
if('');    // ou "" ou ``  (string vazia)

// Truthy
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({});

// ========= OPERADOR LÓGICO DE NEGAÇÃO ! =========

// Truthy
if(!true)                   // false
if(!1)                      // false
if(!'')                     // true
if(!undefined)              // true
if(!!' ')                   // true 
if(!!'');                    // false
// o uso de dois !! serve para verificar se a expressão é verdadeira ou falsa na sua origem (Truthy ou Falsy)

// ========== OPERADORES DE COMPARAÇÃO =============

10 > 5;                     // true
5 > 10;                     // false
20 < 10;                    // false
10 <= 10                    // true
10 >= 11                    // false

//O == faz uma comparação (iguais em valores) e o === faz uma comparação estrita (iguais em valor e tipo)
10 == '10';                 // true  (valores iguais, porém tipos diferentes)
10 == 10;                   // true
10 === '10';                // false
10 === 10                   // true  (valor e tipo iguais )
10 != 15                    // true  (diferentes)
10 != '10'                  // false 
10 !== '10'                 // true   (valores iguais)


// ============ OPERADORES LÓGICOS && (E) ============
// Se ambos os valores forem true ele irá retornar o último valor verificado;
// Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos

true && true;               // true
true && false;              // false
false && true;              // false
'Gato' && 'Cão';            // 'Cão'
(5 - 5) && (5 + 5);         // 0
'Gato' && false;            // false
(5 >= 5) && (3 < 6);        // true


// =========== OPERADORES LÓGICOS || (OU) ==========
//Retorna o primeiro valor true que encontrar

true || true;               // true
true || false;              // true
false || true;              // true
'Gato' || 'Cão';            // 'Gato'
(5 - 5) || (5 + 5);         // 10
'Gato' || false;            // Gato
(5 >= 5) || (3 < 6);        // true


// ============= EXERCÍCIOS ==============

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 25
var idadePrimo = 31

if (minhaIdade < idadePrimo) {
  console.log('É menor')
} else if ( minhaIdade == idadePrimo) {
  console.log('É igual')
} else {
  console.log('É maior')
}

// Qual valor é retornado na seguinte expressão?

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)      // retorna 3 (o ultimo valor)


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';               // truthy
var idade = 28;                   // truthy
var possuiDoutorado = false;      // false
var empregoFuturo;                // false
var dinheiroNaConta = 0;          // false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)   // Para ter a certeza de sua origem 

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes')
} else {
  console.log ('Brasil tem menos habitantes')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');  // irá retornar falso, pois em espressões com &&, o primeiro false já retorna
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');    // retorna cão, pois com && com dois verdadeiros, retorna o ultimo true 
} else {
  console.log('Falso');
}