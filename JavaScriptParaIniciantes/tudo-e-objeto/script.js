
// ================ TUDO É OBJETO ===================
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = 'André';

nome.length;                    // 5  (retorna a quantidade de caracteres do elemento)
nome.charAt(1);                 // 'n' (retorna o caractere através do índice )
nome.replace('ré', 'rei');      // 'Andrei' (troca os elementos;o primeiro argumento é o que irá ser trocado e o segundo é o que ficará no lugar)
nome;                           // 'André'   ( a variável não é modificada )

var nomeMaiusculo = nome.toUpperCase()


// =============== NÚMEROS =================

var altura = 1.8;

altura.toString();              // '1.8' (retorna o valor)
altura.toFixed();               // '2' (faz o arredondamento)

// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos


// =============== FUNÇÕES ==================

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();        //(retorna a função como se estivesse escrita )
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1       // retorna o total de argumentos que a função possui


// =============== ELEMENTOS DO DOM ================

var btn = document.querySelector('.btn');

btn.classList.add('azul')                           // adiciona a classe azul
btn.innerText;                                      // 'Clique' (retorna o texto)
btn.addEventListener('click', function() {
  console.log('Clicou')
})

// =============== OBJETOS REVOLUCIONARAM A PROGRAMAÇÃO ===============

//Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.


// =============== EXERCÍCIOS =================

// nomeie 3 propriedades ou métodos de strings
var nome = 'Maria'
//fixed
//slice
//split

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn')
//addEventListener
//parentNode
//lastChild
//innerHTML
//firstChild

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

// biblioteca js que cria uma função para copiar e colar