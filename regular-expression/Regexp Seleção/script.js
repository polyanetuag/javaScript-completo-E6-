const frase = 'JavaScript';
const novaFrase = frase.replace(/J/, 'B') // o primeiro é a letra de troca e o segundo é que irá substituir

console.log(novaFrase)

// FLAG: G  -> significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. 

// FLAG: I  -> Com o i informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas.

// /[ab]/   -> irá procurar por a ou por b.

// NEGAR  -> Utilizando o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a]