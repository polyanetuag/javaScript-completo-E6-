
// ============= OBJETOS =============

//Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. 
//Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.


// ============= FUNÇÃO CONSTRUTORA ===============

function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 2000);


// ================ NEW KEYWORD =================
/*
const honda = new Carro();

// 1 Cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5 Retorna o novo objeto
return honda = {
  marca: 'Marca',
  preco: 0,
}
 */

// ================== THIS KEYWORD ================
// O this faz referência ao próprio objeto construído com a Constructor Function.

function Carro2(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  console.log(this)
  this.marca = marca;
  console.log(this)       // retorna todos os atributos do objeto

  this.preco = precoFinal
}

const subaru = new Carro2('Subaru', 7000)
console.log(subaru)


// ================== EXERCÍCIOS ==============

// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa('João, 20')
const maria = new Pessoa('Maria, 25')
const bruno = new Pessoa('Bruno, 15')


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;

  this.addClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);            // para adicionar uma classe
    })
  }

  this.removeClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);        //// para remover uma classe
    })
  }
}

const listaItens = new Dom('li');
const ul = new Dom('ul')

// listaItens.addClass('ativar');           
// ul.addClass('ativar-ul')