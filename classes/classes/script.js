//======== Função construtora ========
// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function() {
//   const buttonElement = document.createElement('button');
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this. background;
//   return buttonElement;
// }

//======== Utilizando class ========

// class Button {
//   constructor(text, background) {
//     this.text = text;
//     this.background = background
//   }
//   element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this. background;
//     return buttonElement;
//   }
//   appendTo(target) {
//     const targetElement = document.querySelector(target);
//     targetElement.appendChild(this.element())
//   }
// }


// const blueButton = new Button('Comprar', 'blue');

// console.log(blueButton.appendTo('body'));

// ======= Propriedades (criando um objeto com tudo dentro) ========

class Button {
  constructor(options) {
    this.options = options;
  }
  static createButton(text, background) {
    const buttonElement = document.createElement('button')
    buttonElement.innerText = text;
    buttonElement.style.background = background;
    return buttonElement;

  }
}

const optionsBlue = {
  backgroundColor: 'blue',
  text: 'Comprar',
  color: 'white',
}

const blueButton = new Button(optionsBlue)

const blueButtonStatic = Button.createButton('Clique', 'blue');       // acessa diretamente o objeto

