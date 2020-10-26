// navegação entre as imagens e a descrição dos animais

// 1- selecionando os elementos
function initTabNav() {
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[0].classList.add('ativo')

//2-função para alternar as classes que estão em ativo

  if (tabMenu.length && tabContent.length) {        // 1.1 - verificação dos elementos
    function activeTab(index) {
      tabContent.forEach((section) => {              // para remover a classe ativo, foi usado o loop foreach
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo');         // adiciona a classe ativo
    }
    // 3- adicionando o evento

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      });
    });
  }
}
initTabNav();


// ================= ACORDION LIST ================ outro tipo de navegação
function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
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
initAccordion();


// =================== SCROLL SUAVE - LINK INTERNO =====================

function initScrollSuave() {
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

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
initScrollSuave();


// ================ ANIMAÇÃO AO SCROLL ================

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length) {
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;       // para animar antes de chegar ao topo
      if(isSectionVisible) {
        section.classList.add('ativo');
      } else {
        section.classList.remove('ativo');
      }
    })
  }
  animaScroll()

  window.addEventListener('scroll', animaScroll)
  }
}
initAnimacaoScroll();