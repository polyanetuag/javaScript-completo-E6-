const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if(condicao) {
    setTimeout(() => {
      resolve({nome: 'Ana', idade: 20});
    }, 1000)
  } else {
    reject(Error('Um erro ocorreu na promise'))
  }
});

const retorno = promessa
.then(resolucao => {                            // o then só é ativado quando a promessa foi resolvida
  resolucao.profissao = 'Designer';
  return resolucao;
})      
.then(resolucao => {
  console.log(resolucao)
})
.catch(rejeitada => {                           // o catch ocorre quando a promise é rejeitada
  console.log(rejeitada)
})
.finally(() => {                                // o finally é executado independente da resposta de erro ou acerto
  console.log('Acabou')
})

console.log(retorno);

/* Você pode também passar um parâmetro de erro no then 

.then(resolucao => {
  console.log(resolucao)
}, rejeitada => {
  console.log(rejeitada)
})

*/

// Usando promise.all (Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A reposta é uma array com as respostas de cada promise.)

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário logado')
  }, 100)
})
const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados carregados')
  }, 105)
})

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao)
})

/* Usando promise.race - Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida.

possui uma estrutura simular, trocando apenas all por race 
*/