
// ================ ARRAYS =================
//Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; // azul


// ================ CONSTRUÇÃO DE ARRAYS =================
//Toda array herda os métodos e propriedades do protótipo do construtor Array.

const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1]                   // Mustang
carros[2] = 'Ferrari';      //  substitui o valor ou acrescenta na array
carros[10] = 'Parati';
carros.length;              // 11


// ================ ARRAY.FROM() =================
//Array.from() é um método utilizado para transformar array-like objects, em uma array.

let li = document.querySelectorAll('li');     // retorna uma NodeList
li = Array.from(li);                          // retrona uma Array

const carros2 = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4,
}

const carrosArray = Array.from(carros2);
console.log(carrosArray)                      // o ultimo item retorna undefined, já que não foi especificado


// ================ ARRAY.ISARRAY() =================
//Verifica se o valor passado é uma array e retorna um valor booleano.

Array.isArray(li);            // false - é uma NodeList
Array.isArray(li);            // true -  é uma Array


// ================ ARRAY.OF(), ARRAY() E NEW ARRAY() =================
//Verifica se o valor passado é uma array e retorna um valor booleano. 
//A palavra chave new não é necessária para utilizar o construtor Array.

Array.of(10);                 // [10] - retorna uma array com o valor passado
Array.of(1,2,3,4);            // [1,2,3,4] 
new Array(5);                 // [,,,,] - retorna uma lista de arrays com espaços vazios 
Array(5);                     // [,,,,]
Array(1,2,3,4);               // [1,2,3,4]


// ================ PROPRIEDADES E MÉTODOS DO PROTOTYPE =================
//[].length retorna o tamanho da array.

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length;              // 3 - quantidade de itens

frutas[0].length;           // 6 - qauntidade de caracteres da fruta banana
frutas[1].length;           // 5
frutas[2].length;           // 2 - numeros de elementos na segundo array


// ================ MÉTODOS MODIFICADORES [].SORT() =================
//Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. 
//[].sort() organiza a pelo unicode(ordem alfabética para strings)

const instrumentos1 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos1.sort();
console.log(instrumentos1);           // ['Baixo', 'Guitarra', Violão]

const idades = [32,21,33,43,1,12,8];
idades.sort();
console.log(idades);                  // [1, 12, 21, 32, 33, 43, 8] - em numeros,a ordem são por cada caractere 


// ================ [].UNSHIFT() E [].PUSH() =================

const veiculos = ['Ford', 'Fiat', 'VW'];

//[].unshift() adiciona elementos ao início da array e retorna o length da mesma. 
veiculos.unshift('Honda', 'Kia');               // 5
veiculos;                                       // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

//[].push() adiciona elementos ao final da array e retorna o length da mesma.
veiculos.push('Ferrari');                       // 6
console.log(veiculos);                          // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];


// ================ [].SHIFT() E [].POP() =================
const veiculos2 = ['Ford', 'Fiat', 'VW', 'Honda'];

//[].shift() remove o primeiro elemento da array e retorna o mesmo. 
const primeiroCarro = veiculos2.shift();           // retorna o primeiro da lista -'Ford'
console.log(veiculos2);                           // ['Fiat', 'VW', 'Honda'];


//[].pop() remove o último elemento da array e retorna o mesmo.
const ultimoCarro = veiculos2.pop();              // 'Honda'
console.log(veiculos2);                           // ['Fiat', 'VW'];


// ================ [].REVERSE() =================
//[].reverse() inverte os itens da array e retorna a nova array.


veiculos2.reverse();                    // ['VW', 'Fiat'];
console.log(veiculos2)


// ================ [].SPLICE() =================
//[].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. 
//Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).

const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros3.splice(1, 0, 'Kia', 'Mustang');                 // []
console.log(carros3);                                   // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros3.splice(3, 2, 'Ferrari');                        // ['Fiat', 'VW']
console.log(carros3);                                   // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

// ================ [].COPYWITHIN() =================
//[].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. 
//Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);   // ['Item1', 'Item2', 'Item1', 'Item2']
// o primeiro valor é a posição para a mudança; o segundo é para remover um elemento; e o ultimo é a posição que acabará a array
['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);        // ['Item1', 'Item2', 'Item3', 'Item1']
// com numeros negativos, faz a copia do primeiro elemento e o insere no final da array


// ================ [].FILL() =================
//[].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');         // ['Banana', 'Banana', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);      // ['Item1', 'Item2', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);   // ['Item1', 'Banana', 'Banana', 'Item4']


// ================ MÉTODOS DE ACESSO [].CONCAT() =================
//Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. 
//[].concat() irá concatenar a array com o valor passado.

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);                  // ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');   // ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];


// ================ [].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF() =================

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

//[].includes(valor) verifica se a array possui o valor e retorna true ou false. 
linguagens.includes('css');           // true
linguagens.includes('ruby');          // false

//[].indexOf(valor) verifica se a array possui o valor e retorna o index(posição) do primeiro valor na array. 
linguagens.indexOf('python');         // 4
linguagens.indexOf('js');             // 2

//Já o [].lastIndexOf(valor) retorna o index(posição) do último.
linguagens.lastIndexOf('js'); // 5


// ================ [].JOIN() =================
//[].join(separador) junta todos os valores da array e retorna uma string com eles. 
//Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.

const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
console.log(linguagens2.join());                     // 'html,css,js,php,python'
console.log(linguagens2.join(' '));                  // 'html css js php python'
console.log(linguagens2.join('-_-'));                // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');                 // ['<', '>Título Principal</', '>'] removeu o h2
htmlString = htmlString.join('h1');                  // <h1>Título Principal</h1> e adicionou o h1


// ================ [].SLICE() =================
//[].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.

const linguagensProg = ['html', 'css', 'js', 'php', 'python'];
linguagensProg.slice(3);                      // ['php', 'python']
linguagensProg.slice(1, 4);                   // ['css', 'js', 'php']
console.log(linguagensProg)

const cloneLinguagens = linguagensProg.slice();
console.log(cloneLinguagens)

// ================ EXERCÍCIOS =================

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiroValor = comidas.shift();
console.log(primeiroValor);

const ultimoValor = comidas.pop();
console.log(ultimoValor)

comidas.push('Arroz');                    //adiciona no final
comidas.unshift('Peixe', 'Batata');       // adiciona no inicio

console.log(comidas)


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
// Inverta a ordem dos estudantes
estudantes.reverse();
// Verifique se Joana faz parte dos estudantes
console.log(estudantes)

console.log(estudantes.includes('Joana'))
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section').join('ul')
console.log(html)

html = html.split('div').join('li')
console.log(html)


const automoveis = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const automoveisCopia = automoveis.slice();

automoveis.pop();

console.log(automoveis);
console.log(automoveisCopia);