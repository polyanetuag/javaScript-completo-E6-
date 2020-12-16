// ========== SCROLL SUAVE - LINK INTERNO ===========

export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  
  function scrollToSection(event) {
    event.preventDefault();           // previnindo o comportamento
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  
    // forma alternativa
    // const topo = section.offsetTop
    // window.crollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // })
  
  }
  
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
  }
