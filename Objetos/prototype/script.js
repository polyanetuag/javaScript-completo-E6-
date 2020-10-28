
// ================== PROTOTYPE ==================
// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const andre = new Pessoa('André', 28);  

console.log(Pessoa.prototype);        // retorna o objeto
console.log(andre.prototype);         // undefined (só funciona dentro da função)


// ================== FUNCAO.PROTOTYPE ==================
// É possível adicionar novas propriedades e métodos ao objeto prototype.

Pessoa.prototype.andar = function() {
  return this.nome + ' andou';
}
Pessoa.prototype.nadar = function() {
  return this.nome + ' nadou';
}
console.log(Pessoa.prototype); // retorna o objeto



// ================== ACESSO AO PROTÓTIPO ==================
//O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade de funções apenas.

const maria = new Pessoa('Maria', 40);

maria.nome;
maria.idade;
maria.andar();
maria.nadar();



// ================== PROTO ==================
// O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. 
//É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.

// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome
maria.andar();
maria.__proto__.andar();


// ================== HERANÇA DE PROTÓTIPO ==================
//O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. 
//O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.

Object.prototype;
andre.toString();
andre.isPrototypeOf();
andre.valueOf();


// ================== É POSSÍVEL ACESSAR A FUNÇÃO DO PROTÓTIPO ==================

const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);   // transformando de Nodelist para Array

//Existe o método Array.from()


// ================== MÉTODO DO OBJETO VS PROTÓTIPO ==================
// Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.

Array.prototype.slice.call(lista);
Array.from(lista);

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

// dado.constructor.name, retorna o nome do construtor;


// ================== APENAS OS MÉTODOS DO PROTÓTIPO SÃO HERDADOS ==================

[1,2,3].slice(); // existe
// [1,2,3].from(); // não existe


// ================== ENTENDA O QUE ESTÁ SENDO RETORNADO ==================
//Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .

const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String

//Verifique o nome do construtor com .constructor.name


// ================== EXERCÍCIO ==================

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

const ana = new Pessoa('Ana', 'Carolina', 20);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;                   // HTMLLIElement
li.click;             // Function 
li.innerText;         // String
li.value;             // Number
li.hidden;            // Boolean
li.offsetLeft;        // Number
li.click();           // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;       // String
