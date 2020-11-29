// .headers - É uma propriedade que possui os cabeçalhos da requisição. 
//É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles.

const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then(response => {
  console.log(response);
  response.headers.forEach(console.log);
})