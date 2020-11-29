// Clone() - clonando e transformando uma resposta em diferentes valores 
const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then(r => {
  const r2 = r.clone();
  r.text().then((text) => {       // transformou em texto
    console.log(text);
  })
  r2.json().then((json) => {      // tarnsformou em objeto
    console.log(json)
  })
  console.log(r)
})
.then(body => {
  console.log(body);
});