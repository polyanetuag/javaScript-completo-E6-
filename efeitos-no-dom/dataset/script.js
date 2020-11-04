
// ================= HTMLELEMENT ==================
//Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement.

const h1 = document.querySelector('h1');
Object.prototype.toString.call(h1); // retorna  [object HTMLHeadingElement]
// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object


// ================= DATASET ==================
//dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap.
// Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.


// Ambos os valores selecionam a mesma div acima.
let div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

div.dataset;          // DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor;      // 'azul'
div.dataset.width;    // '500'
console.log(div.dataset.tempo = 1000);  // DOMStringMap {cor: "azul", width: "500", tempo: "1000"}


// ================= DATA ATRIBUTES ==================
//Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.

`<div data-anima="left" data-tempo="1000">Div 1</div>
<div data-anima="right" data-tempo="2000">Div 2</div>`

const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);           // adiciona em cada div uma classe com o mesmo nome que o valor de data
});


// ================= DATA VS CLASS ==================
//A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. 
//Além de deixar a estrutura da tag mais organizada.

`<div data-anima="left" data-tempo="1000">Div 1</div>
<div class="anima-left tempo-1000">Div 2</div>
`


// ================= NOMENCLATURA ==================
//Por padrão, o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. 
//Então qualquer traço será removido e a letra seguinte transformada em maiúscula.

`<div data-anima-scroll="left">Div 1</div>`

const div2 = document.querySelector('[data-anima-scroll]');
div2.dataset;                      // {animaScroll: 'left'}
div2.dataset.animaScroll;          // left
div2.dataset.tempoTotal = 1000;    // Na div2 vira data-tempo-total="1000"

delete div2.dataset.animaScroll;   // remove o atributo
