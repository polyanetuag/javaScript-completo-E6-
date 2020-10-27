//Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.

// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor)     // retorna o elemento
//   },
//   ativar() {
//     this.element().classList.add('ativar');         //adiciona uma classe
//   }

// }
// Dom.ativar();
// Dom.seletor = 'ul';
// Dom.ativar();               //problemas ao manipular o elemento(uma função sobrepoe a outra - Como resolver? Transformar em uma função construtora!)


function Dom(seletor) {
  this.element = function() {
    return document.querySelector(this.seletor)     // retorna o elemento
  } 
  this.ativar = function() {
    this.element().classList.add('ativar');         //adiciona uma classe
   }
  }

const li = new Dom('li')                            //criando novo elemento
const ul = new Dom('ul')                            //criando novo elemento

const lastLi = new Dom('li:last-child')             //criando novo elemento
lastLi.ativar();