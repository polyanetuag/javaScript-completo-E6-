function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }

  return Object.freeze({              // congela os elementos, impossibilitando su mudança
    text,
    element
  });
}

const btnComprar = createButton('Comprar');
const btnVender = createButton('Vender');

console.log(btnComprar, btnVender)