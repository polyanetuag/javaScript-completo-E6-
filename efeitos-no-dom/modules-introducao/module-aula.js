// ================= MÓDULOS ===============

/*
Manutenção

Dividir o código em diferentes arquivos com funções específicas (módulos) facilita a manutenção.

Compartilhamento

O compartilhamento de código com outros projetos é facilitado, pois basta você importar um módulo específico.

Nativo no ES6+

Ferramentas que permitem dividirmos o código em módulos já existem a bastante tempo. Grunt, Gulp, Webpack, Browserify, Parcel e outras. Mas agora os módulos são nativos.
*/


// ================= MODULES ES6 ===============
//Basta adicionar type="module" na tag script do HTML. 
//Utilize a palavra chave export na frente do valor que deseja exportar (use default se for único). 
//E import nome from arquivo.js para importar.

<script type="module" src="js/script.js"></script>

/*
// arquivo scroll-suave.js
export default function scrollSuave() {
  ...
};

// arquivo script.js
import scrollSuave from './scroll-suave.js';

scrollSuave();
*/

//Geralmente um valor por módulo.


