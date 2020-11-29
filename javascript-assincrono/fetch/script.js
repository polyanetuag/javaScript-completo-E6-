// Blob - transforma requisições de imagens,por exemplo
// requisição via fetch de imagem 
const imagem  = fetch('./imagem.png');

imagem.then(r => r.blob())
.then(body => {
  const blobUrl = URL.createObjectURL(body);
  const imagemDom = document.querySelector('img')
  imagemDom.src = blobUrl
});