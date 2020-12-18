// ================= ACORDION LIST ================ outro tipo de navegação
export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';

  function activeAccordion() {
    this.classList.toggle(activeClass);
    // eslint-disable-next-line max-len
    this.nextElementSibling.classList.toggle(activeClass);// o this faz referencia ao item que está sendo selecionado
  }
  if (accordionList.length) { // verificar se existe
    accordionList[0].classList.add(activeClass); // começar o primeiro item aberto
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
