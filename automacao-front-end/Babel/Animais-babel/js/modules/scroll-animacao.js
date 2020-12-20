// ================ ANIMAÇÃO AO SCROLL ================

export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      // eslint-disable-next-line max-len
      const isSectionVisible = (sectionTop - windowMetade) < 0; // para animar antes de chegar ao topo
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) { // para evitar o disparo desnecessário da função
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
