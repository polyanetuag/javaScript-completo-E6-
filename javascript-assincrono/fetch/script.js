// injetando uma página HTML através de uma requisição fetch

const sobre = fetch('./sobre.html');

const div = document.createElement('div')

sobre.then(r => r.text())
.then(body => {
  div.innerHTML = body;
  console.log(div)
})