// ================ ANIMAÇÃO AO SCROLL ================

export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if(sections.length) {
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;       // para animar antes de chegar ao topo
      if(isSectionVisible) {
        section.classList.add('ativo');
      } else if(section.classList.contains('ativo')) {      // para evitar o disparo desnecessário da função
        section.classList.remove('ativo');
      }
    })
  }
  animaScroll()

  window.addEventListener('scroll', animaScroll)
  }
}

