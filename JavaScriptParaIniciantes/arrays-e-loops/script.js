
// ================== ARRAYS ===================

//É um grupo de valores geralmente relacionados. 
//Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0]         // Switch (Para acessar o array, basta colocar o [] e o índice do elemento)
videoGames[2]         // Xbox


// ================== MÉTODOS E PROPRIEDADES DE UMA ARRAY ====================

var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop();             // Remove o último item e retorna ele
videoGames.push('3DS');       // Adiciona ao final da array
videoGames.length;            // 3

//=================== FOR LOOP =====================

//O for loop possui 3 partes, início, condição e incremento
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// Retorna de 0 a 9 no console


//=================== WHILE LOOP ====================

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console


// ================ ARRAYS E LOOPS =================

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {           // o length serve para retornar a quantidade de objetos dentro do array
  console.log(videoGames[i]);
}


// ================= BREAK ==================

// O loop irá parar caso encontre e palavra break

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;                                          // Aqui, como tem uma condição, o loop acontecerá e irá parar quando encontrar o break
  }
}


// ============== ForEACH ==================
// forEach é um método que executa uma função para cada item da Array. 
//É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item) {                 // O argumento item será atribuído dinamicamente
  console.log(item);
});

//Podemos passar os seguintes parâmetros: item, index e array

// ================ NÃO SE CONFUNDA COM A SINTAXE ==================
// o código pode ser escrito sem passar o inicio e o incremento no for (mas não é RECOMENDADO)

var numero = 0;
var maximo = 50;
for(;numero < maximo;) {        // só possui a condição
  console.log(numero);
  numero++;                     // o incremento foi adicionado no final
}


// ======================== EXERCÍCIOS ==========================

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copaBrasil = [1959, 1962, 1970, 1994, 2002]


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for( var ano = 0; ano < copaBrasil.length; ano++) {
  console.log(`O Brasil ganhou a copa de ${copaBrasil[ano]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']
for(var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta])
  if (frutas[fruta] === 'Pera') {
    break
  }
}


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length -1];
console.log(ultimaFruta)                    // retorna melancia