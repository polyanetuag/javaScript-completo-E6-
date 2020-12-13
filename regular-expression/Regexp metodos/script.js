// ============= REGEXP CONSTRUCTOR ===============
//Toda regexp é criada com o constructor RegExp() e herda as suas propriedades e métodos.

const regexp = /\w+/gi;         // regexp clássico

//se passarmos uma string, não precisamos dos // e devemos utilizar \\ para escapar a tag especial; e as flags são o segundo elemento


const regexpObj1 = new RegExp('\\w+', 'gi');      // regexp com constructor
const regexpObj2 = new RegExp(/\w+/, 'gi');

const frase1 = 'JavaScript Linguagem 101';
console.log(frase1.replace(regexpObj1, 'X'))

//============ PROPRIEDADES DE UMA REGEXP ===============

regexp.flags;             // 'gi'
regexp.global;            // true
regexp.ignoreCase;        // true
regexp.multiline;         // false
regexp.source;            // '\w+'


//============== REGEXP TEST() ================
// Verifica se existe ou não uma ocorrência de busca. Se existir, retorna true
//A próxima vez que chamarmos o memso, irá começãr do index que parou no ultimo true

const regexpLinguagem = /Java/g

const frase = 'JavaScript e Java';

regexpLinguagem.lastIndex            // 0 - indice 
regexpLinguagem.test(frase)          // true
regexpLinguagem.lastIndex            // 4 - indice
regexpLinguagem.test(frase)          // true
regexpLinguagem.lastIndex            // 17 
regexpLinguagem.test(frase)          // false 
regexpLinguagem.lastIndex            // 0
regexpLinguagem.test(frase)          // true - reinicia o processo


// ============== TESTE() EM LOOP ==============
// para simplificar, podemos utilizar um loop para mostrar enquanto a condição for verdadeira

let i = 1;
while(regexpLinguagem.test(frase)) {
  console.log(i++, regexpLinguagem.lastIndex);
}


//============== REGEXP.EXEC() =============
//retorna uma array com mais informações

const regexp2 = /\w+/g;

const frase3 = 'JavaScript, TypeScript, CoffeScript, Java';

let regexResult;
while((regexResult = regexp2.exec(frase3)) !== null) {        //loop
  console.log(regexResult)
}


//============= STR.MATCH() ==============
//O match() é um método de strings que pode receber como argumento uma Regexp.

const resultados = frase3.match(regexp2)
console.log(resultados)                 // retorna uma array

//obs: Sem a flag g, irá retornar apenas o primeiro indice da frase


//============ STR.SPLIT() =============
//remove o match da array final e quebra a string no argumento que for passado

const regexpFrase = /\w+/g;
const fraseScript = 'JavaScript, TypeScript, CoffeeScript';

const resultadoSplit = fraseScript.split(regexpFrase)
console.log(resultadoSplit)


//============ STR.REPLACE() ==============
//substitui e permite a utilizaçao de funções de callback

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexpTag = /(?<=<\/?)\w+/g;                //substituindo todas as tags por 'div'
const resultado = tags.replace(regexpTag, 'div')
console.log(resultado)


//============ GRUPOS DE CAPTURA =============

const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

const regexpEmail = /(\w+@)[\w.]+/g

const resultado2 = emails.replace(regexpEmail, '$1gmail.com');
console.log(resultado2)


//============= CALLBACK ==============
//Para substituições mais complexas, podemos utilizar um callback como segundo argumento do replace. O valor do return será o que irá substituir cada match.

const emails2 = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`

const regexpEmails = /(\w+@)([\w.]+)/g;

const valores = emails2.replace(regexpEmails, function(...args) {
  if(args[2] === 'homail.com.br') {
    return args[1] + 'hotmail.com.br';
  } else if(args[2] === 'ggmail.com.br') {
    return args[1] + 'gmail.com.br';
  } else if(args[2] === 'oulook.com.br') {
    return args[1] + 'outlook.com.br'
  } else {
    return args[0]
  }
});

console.log(valores)