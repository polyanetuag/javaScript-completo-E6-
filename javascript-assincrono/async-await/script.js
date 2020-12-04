// async function puxarDados() {
//   const responseDados = await fetch('./dados.json')
//   const jsonDados = await responseDados.json();

//   document.body.innerText = jsonDados.aula;       // aparece no body
//   console.log(jsonDados.aula)                     // aparece no devTools 
// }

// puxarDados();


// ============== TRY E CATCH ===============

// async function puxarDados() {
//   try{
//     const responseDados = await fetch('/dadosS.json');      //simulando um erro em 'dados'
//     const jsonDados = await responseDados.json();
//     document.body.innerText = jsonDados.aula;

//   } catch (erro) {
//     console.log(erro);
//   }
// }

// puxarDados();


// ============ INICIAR FETCH AO MESMO TEMPO ============

async function puxarDados() {
  const responseDados = fetch('./dados.json');
  const responseClientes = fetch('./clientes.json');

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();

  console.log(jsonDados)
  console.log(jsonClientes)
}

puxarDados();

// O resultado da expressão à frente de await tem que ser uma promise.