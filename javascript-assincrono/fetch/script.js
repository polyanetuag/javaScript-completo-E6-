// .url e .type
//.url retorna o url da requisição. 
//.type retorna o tipo da reposta.

const cep = fetch('./docs');        // página não existe

cep.then(response => {
  console.log(response.url);        // retorna a url da página 
  console.log(response.type);        // retorna o tipo de servidor_ BASIC - requisição dentro do próprio servidor
  if(response.status === 404) {
    console.log('Essa página não existe!')
  }
});



// cors - requisição fora do servidor, porém permitida