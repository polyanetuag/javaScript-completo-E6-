const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

// utilizando destructuring

const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras; // o acesso deve ser feito até o nível dos objetos

console.log(livros);
console.log(videos);
console.log(digitais);


// ============= EXERCÍCIOS ============

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);            // valores atuiais do browser

// desestruturando
const {backgroundColor, margin, color} = btnStyles;

console.log(backgroundColor)
console.log(margin)
console.log(color)


// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]; //trocando a ordem 

console.log(cursoAtivo);
console.log(cursoInativo);


// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;

console.log(bobCor)