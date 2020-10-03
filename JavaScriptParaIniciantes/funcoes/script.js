// Bloco de código que pode ser executado e reutilizado
function areaQuadrado(lado) {
  return lado * lado
}
console.log(areaQuadrado(5))

//O uso dos parenteses executam a função

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7       


// ======== PARÂMETROS E ARGUMENTOS ========

//criar uma função = definir parâmetros
//Ao executar uma função = passar argumentos.

// peso e altura são os parâmetros
function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos

// ======== PARÊNTESES EXECUTA A FUNÇÃO ========

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Gosto do mar';
  } else if (cor === 'verde') {
      return 'Gosto da natureza';
  } else {
      return 'Gosto do neutro';
  }
}
corFavorita();


// ======== ARGUMENTOS PODEM SER FUNÇÕES =======

addEventListener('click', function() {
  console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

//Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}


// ========== PODE OU NÃO RETORNAR UM VALOR ==========

// Quando não definimos o return, ela irá retornar undefined. 
// O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc2(peso, altura) {
  var imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(90, 1.80);                       // retorna o imc
console.log(imc2(80, 1.80));          // retorna o imc e undefined

// ========= VALORES RETORNADOS ============

function terceiraIdade(idade) {
  if (typeof idade !== 'number' ) {
    return 'Por favor, preencha com número'
  } else if (idade >= 60) {
    return true
  } else {
    return false
  }
}
console.log(terceiraIdade('oi'))


// ========= ESCOPO =========

function faltaVisitar(paisesvisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesvisitados} países`
}

//console.log(totalPaises)    // ERRO, pois a variável só fica visível dentro do escopo


// ========= ESCOPO LÉXICO ========
// Funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados(); // ativa a função outrosDados e traz as informações com o return 
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro

// ========= HOISTING ===========
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}


// ================ EXERCÍCIOS =================

// Crie uma função para verificar se um valor é Truthy
 function isThuthy(dado) {
   return !!dado   // passar parametros no console
 }


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

  function perimetroQuadrado(lado) {
    return lado * 4
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

  function nomeCompleto(nome, sobrenome) {
    return `Me chamo ${nome} ${sobrenome} !`
  }

// Crie uma função que verifica se um número é par

  function isEven(numero) {
    modulo = numero % 2
    if (modulo === 0 ) {
      return true
    } else {
      return false 
    }
  }

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

  function tipoDeDado(dado) {
    return typeof dado
  }

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
  console.log('Poly Tuag')
})

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
