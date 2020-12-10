function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou um ' + premio)
  });
}

const ganhadores = ['Pedro', 'Marta', 'Maria']
anunciarGanhadores('Carro', ...ganhadores); // spread como argumento


// REST -> arry
// ARGUMENTS -> objeto(array-like)

// SPREAD - junta os elementos

const frutas1 = ['Maça', 'Uva', 'Morango', 'Abacaxi']
const legumes = ['Cenoura', 'Batata']

const comidas1 = [...frutas1, ...legumes]
console.log(comidas1)


const todosOsNumeros = [ 2, 5, 39, 20, 11, 30, 50]
const numeroMaximo = Math.max(...todosOsNumeros)

console.log(numeroMaximo);



const botoes = document.querySelectorAll('button');
console.log(botoes)       //Nodelist

const btnsArray = [...botoes];
console.log(btnsArray)    // Array


//========== EXERCICIOS ==========

// Reescreva a função utilizando valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {     // se não passar nenhum argumento, esses serão os valores definidos 
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
} 

const redButton = createButton('orange', 'white');


// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas)
console.log(comidas)