function $$(selectedElements) {                               //jquery
  const elements = document.querySelectorAll(selectedElements);
  

  function hide() {                     //esconder os botões
    elements.forEach(element => {
      element.style.display = 'none';
    });
    return this;        // retorna a própria função para que se possa ter acesso a outros métodos
  }

  function show() {                     //mostrar os botões
    elements.forEach(element => {
      element.style.display = 'initial';
    });
    return this;
  }

  function on(onEvent, callback) {      //colocar eventos 
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }
  
  function addClass(className) {        //adicionar classes
    elements.forEach(element => {
      element.classList.add(className);
    });
    return this
  }

  function removeClass(className) {        //remover classes
    elements.forEach(element => {
      element.classList.remove(className);
    });
    return this
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  }
}

const btns = $$('button');

console.log(btns.hide().show())

function handleClick(event) {
  console.log(event.target)
  btns.addClass('active');
}

btns.on('click', handleClick);