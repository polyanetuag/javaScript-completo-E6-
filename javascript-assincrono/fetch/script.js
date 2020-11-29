// .status - Retorna o status da requisição. 
//Se foi 404, 200, 202 e mais. ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.

const cep = fetch('./docs');        // página não existe

cep.then(response => {
  console.log(response.status);
  if(response.status === 404) {
    console.log('Essa página não existe!')
  }
});