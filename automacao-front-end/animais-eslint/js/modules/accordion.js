
// ================= ACORDION LIST ================ outro tipo de navegação
export default function initAccordion(){
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';

  if(accordionList.length) {                                  // verificar se existe

  accordionList[0].classList.add(activeClass)                     //começar o primeiro item aberto
  accordionList[0].nextElementSibling.classList.add(activeClass)

  function activeAccordion() {
    this.classList.toggle(activeClass)
    this.nextElementSibling.classList.toggle(activeClass);         // o this faz referencia ao item que está sendo selecionado
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  });
}
}
