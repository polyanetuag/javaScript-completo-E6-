const doc = fetch('./doc.txt');

doc.then(resolucao => {
  return resolucao.text();
}).then((body) => {
  const conteudo = document.querySelector('.conteudo');
  conteudo.innerText = body
})


// Usando uma API DE CEP

const cep = fetch('https://viacep.com.br/ws/01001000/json/')

cep.then(r => r.json())
.then(body => {
  console.log(body.logradouro)
  //const conteudo = document.querySelector('.conteudo');
  //conteudo.innerText = body.logradouro
})


// Injetando css através de uma requisição fetch

const cor = fetch('./style.css')

cor.then(r => r.text())
.then(body => {
  const conteudo = document.querySelector('.conteudo');
  const style = document.createElement('style')
  style.innerHTML = body
  conteudo.appendChild(style);
})

