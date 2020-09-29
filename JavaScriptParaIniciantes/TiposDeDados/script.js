var nome = 'Ana'
var idade = 40
var simbolo = Symbol()

console.log(typeof nome)      // string
console.log(typeof idade)     // number
console.log(typeof simbolo)   // symbol


// Concatenando strings

var comida = 'Nega';
var sobremesa = 'Maluca';
var comidaSobremesa = comida + ' ' + sobremesa;

console.log(comidaSobremesa)

// com strings e numeros

var copo = 3 
var acao = 'Lara tomou ' +  copo +  'copos dágua';

console.log(typeof acao)      //retorna uma string 


var ano = '2020';
var mes = 10

console.log(ano + mes)        // concatena, mas não soma os valores

// O tipo de aspa deve ser observado para que não ocorra confusões

var frase = 'Esse é o \'melhor\' dia';

console.log(frase)


// Template String

var copo = 3 
var acao = `Juliana tomou ${copo} copos d'água`;

console.log(acao)  


// EXERCÍCIOS


// Declare uma variável contendo uma string

var doce = 'chocolate'
console.log(typeof doce)

// Declare uma variável contendo um número dentro de uma string

var fotos = '160'
console.log(typeof fotos)

// Declare uma variável com a sua idade

var idade = 25
console.log(typeof idade)

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

var nome = 'Polyane'
var sobrenome = 'Tuag'
var nomeCompleto = `${nome} ${sobrenome}`

console.log(nomeCompleto)

// Coloque a seguinte frase em uma variável: It's time

var frase2 = `It's time` /*ou  'It\'s time'   "It's time"*/ 

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome)