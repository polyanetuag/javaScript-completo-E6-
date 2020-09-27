// var, let e const 
var nome = 'Poly'
var idade = 25
var possuiFaculdade = 'true'

console.log(nome, idade, possuiFaculdade)


// Evitam repetições (DRY- Don't repeat yourself)

var flor = 15
var totalComprado = 5
var florTotal = flor * totalComprado

console.log(florTotal)

// Uso de vírgulas

var cidade = 'Vila Velha', 
    estado = 'ES'; 

console.log(cidade, estado)


// Sem definir a variável (sem valor)

var bolo;

console.log(bolo)      // retorna indefined

/* Quanto ao nome

Podem conter $, _ ou letras (numeros somente entre ou no final - nunca começar)
Case Sensitive - ex: nome é diferente de Nome
Não usar palavras reservadas do JS
Camel case - sem usar espaços - ex: nomeSobrenome
*/ 

/* Sm declarar uma variável  

  console.log(JavaScript) - retorna que não foi definido 
*/ 


// Hoisting - São movidas para cima do código, porém o valor atribuído não é movido.

var comida;
console.log(comida)   // retorna indefined

comida = 'Pizza' 
console.log(comida)  // retorna Pizza

// Mudar o valor atribuído - somente para var e let 

var livro = 'azul'
livro =  'vermelho'
console.log(livro)  // retorna vermelho, pois a variável foi redeclarada

let agenda = 'branca'
agenda = 'preta'
console.log(agenda)   // retorna preta


/* const - valor único 

const livro ='azul'
livro = 'vermelho'
console.log(livro)   // retorna um erro, pois a constante não pode ser redefinida
*/ 


// EXERCÍCIOS 

// Declarar uma variável com o seu nome
  var nome = 'Polyane'

// Declarar uma variável com a sua idade
  var idade = 25

// Declarar uma variável com a sua comida
// favorita e não atribuir valor
  var comidaFavorita;

// Atribuir valor a sua comida favorita
  var comidaFavorita = 'batata frita'

// Declarar 5 variáveis diferentes sem valores

var esporte,
    filme, 
    idioma, 
    endereco, 
    pais


console.log(nome, idade, comidaFavorita)