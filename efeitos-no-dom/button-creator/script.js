// selecionando os items que serão usados 
const controles = document.getElementById('controles');      // formulário
const cssText = document.querySelector('.css');             // texto do css
const btn = document.querySelector('.btn');                 // botão clique 
controles.addEventListener('change', handleChange);

function backgroundColor(value) {
  btn.style.backgroundColor = value;
}

const handleStyle = {                       // mudará todos os estilos
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
}

function handleChange(event) {                // irá lidar com as mudanças
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  showCss();

}

function showCss() {                        // para aparecer em tela os valores de css
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}