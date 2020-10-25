// navegação entre as imagens e a descrição dos animais

// 1- selecionando os elementos

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
    })
  })
}