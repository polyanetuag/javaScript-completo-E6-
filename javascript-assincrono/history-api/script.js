const links = document.querySelectorAll('a');

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href)         // mudando o endereço das paginas 
}

async function fetchPage(url) {
  document.querySelector('.content').innerHTML = 'Carregando...'        // efeito loading para mudar de conteudo(antes de começar o fetch) 
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText);
}

function replaceContent(newText) {
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText

//mudando o conteudo da pagina
  const oldContent = document.querySelector('.content')
  const newContent = newHtml.querySelector('.content')

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector('title').innerText         // alternando o titulo da pagina  
}

window.addEventListener('popstate', () => {
  fetchPage(window.location.href);
})

links.forEach(link => {
  link.addEventListener('click', handleClick);
})