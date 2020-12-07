const button = {
  get tamanho() {
    return this._numero || 100
  }, 
  set tamanho(numero) {             // só posso midificar o valor quando tiver o set
    this._numero = numero * 100
  }
}

// ======== SET =========

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  }
}

frutas.nova = 'Banana'
frutas.nova = 'Uva'

//



class Button {
  constructor(text, color) {
    this.text = text
    this.color = color
  }
  get element() {
    const type = this._elementType || 'button';
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type
  }
}

const redButton = new Button('Comprar', 'red')
console.log(redButton)