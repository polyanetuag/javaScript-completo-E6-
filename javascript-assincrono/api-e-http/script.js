// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(response => response.json())
// .then(pokemon => {
//   console.log(pokemon); //retorna os dados dos pokemons que estão na api
// });


//Fazendo uma requisição - URL E METHOD

const url = 'https://jsonplaceholder.typicode.com/posts/';      // api fake
const options = {
  method: 'POST',
  body: '{"title": "JavaScript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8" 
  }
}

fetch(url, options)
.then(response => response.json())
.then(json => console.log(json))