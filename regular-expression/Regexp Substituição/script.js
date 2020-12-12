// ======== REFERÊNCIA DA SELEÇÃO ($&)========

const regexp = /Java/g;

console.log('PHP e Java são linguagens diferentes'.replace(regexp, '--$&Script'));        


// ========= GRUPO DE CAPTURA ()==========

// Procura:
//sequencia alfanumerica (\w+) 
//seguida de @
//seguido novamente de sequencia alfanumerica
const regex = /(\w+)@[\w.]+/g
// $1 = primeiro grupo
console.log('contato@email.com.br'.replace(regex, '$1@gmail.com'));     // retorna contato@gmail.com


// ========== MAIS DE UM GRUPO DE CAPTURA ==========

//seguindo o mesmo principio anterior 

const regexNome = /(\w+),\s(\w+)/g;

console.log('Silva, Maria'.replace(regexNome, '$2 $1'));


// ======== MAIS DO QUE CAPTURA APENAS ========
// um grupo de captura também serve para agrupar uma sequencia de caracteres para alguma repetição

const regexCaracter = /(ta)+/gi;

console.log('Tatata, tata, ta'.replace(regexCaracter, 'Pá'))


//========= IGNORAR CAPTURA  ==========

// basta utilizar (?: sequencia)


//========= POSITIVE LOOKAHEAD ===========
// faz a seleção dos itens que possuirem o padrao dentro de (?=) à sua frente  -> não captura grupo

const regexValores = /\d(?=px)/g;

console.log('2em, 4px, 5%, 2px, 1px'.replace(regexValores, 'X'));       // irá substituir os valores que conterem apenas o px


//========= NEGATIVE LOOKAHEAD ===========
//oposto do positivo, seleciona os itens que não possuiem o padrão dentro de (?!) à sua frente.

const regexValores2 = /\d(?!px)/g;

console.log('2em, 4px, 5%, 2px, 1px'.replace(regexValores2, 'X'));


//=========== POSITIVE LOOKBEHIND ============
//faz a seleção dos itens que possuírem o padrão dentro de (?<=) atrás do mesmos

//procura por digitos que possuirem R$ na frente dos mesmos
const regexPrecos = /(?<=R\$)[\d]+/g;

console.log('R$99, 100, 200, R$20'.replace(regexPrecos, 'X'));