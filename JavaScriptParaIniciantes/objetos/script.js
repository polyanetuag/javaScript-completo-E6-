
// =================== OBJETOS =================
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}
// PARA 'CHAMAR' A PROPRIEDADE
pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true

// Propriedades e métodos consistem em nome (chave) e valor

// ================= MÉTODOS ================
//É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4,
  area: function(lado) {              
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;         // o this se refere ao próprio objeto (uma maneira de não ter que ficar repetindo a variável)
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25               // para acessar a propriedade, basta inserir a variável e a função (passando ou não um parâmetro)
console.log(quadrado.perimetro(5)); // 20

// area(lado) {                       // na atualização ES6, pode-se abreviar a função, passsando ou não um parâmetro
//   return lado * lado;
// }


// =============== ORGANIZAR O CÓDIGO ===============
//Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI;                    // 3.14     (objeto e método)
Math.random();              // número aleatório

var pi = Math.PI;
console.log(pi);            // 3.14


//================== CRIAR UM OBJETO =================

//Um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'


// ================= DOT NOTATION GET ================
//Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E' pegando o valor 


// ================= DOT NOTATION SET ================
//Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000';                  // 'setando'/trocando/ atribuindo valores
console.log(menu.backgroundColor); // '#000'


// =============== ADICIONAR PROPRIEDADES E MÉTODOS ================
// Basta adicionar um novo nome e definir o valor.

var menu = {
  width: 800,
}

menu.height = 50;             // se a propriedade já existir, irá ser substituida pelo nobo valor
menu.position = 'fixed';


// ================= PALAVRA-CHAVE THIS ===============
// this irá fazer uma referência ao próprio objeto.

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;         // this faz referencia ao height dentro da variavel menu 
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60


// ================== PROTÓTIPO E HERANÇA ================
//O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu = {
  width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false







// ======================= EXERCÍCIOS =========================

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var pessoa = {
  nome: 'Polyane',
  sobrenome: 'Tuag',
  idade: 25,
}

// Crie um método no objeto anterior, que mostre o seu nome completo

pessoa.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`         // o this se refere a variavel pessoa
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;       // setando um novo valor

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10, 
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'latir';
    } else {
      return 'Não latir';
    }
  }
}

