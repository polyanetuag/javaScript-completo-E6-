// navegação entre as imagens e a descrição dos animais

// 1- selecionando os elementos
export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add('ativo');

  // 2-função para alternar as classes que estão em ativo

  function activeTab(index) {
    tabContent.forEach((section) => { // para remover a classe ativo, foi usado o loop foreach
      section.classList.remove('ativo');
    });

    const direcao = tabContent[index].dataset.anime;// exercício efeitos do DOM - Dataset
    tabContent[index].classList.add('ativo', direcao);// adiciona a classe ativo
  }

  if (tabMenu.length && tabContent.length) { // 1.1 - verificação dos elementos
    // 3- adicionando o evento

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
