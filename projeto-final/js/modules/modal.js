export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function cliqueForaModal() {
    if (event.target === this) { // para poder cadastrar os dados
      toggleModal(event);
    }
  }

  if (botaoAbrir && botaoFechar && containerModal) { // verificar a existencia das funcoes
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}
