
// =============== OBJECT ================
//Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.

const carro = {
  marca: 'Ford',
  ano: 2018,
}

const pessoa = new Object({
  nome: 'André',
  idade: 28,
})
console.log(pessoa)

// =============== MÉTODOS DE OBJECT ================
//Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

const veiculo = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;                        // deve referenciar o objeto
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(veiculo).init('Honda');
console.log(honda.acelerar());

const ferrari = Object.create(veiculo).init('Ferrari');         // novo objeto
console.log(ferrari.acelerar());


// =============== OBJECT.ASSIGN() ================
//Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

const carro2 = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);             // (atenção: propriedades iguais se sobrepõem )
Object.assign(carro2, funcaoAutomovel);

console.log(moto)
console.log(carro2)

// =============== OBJECT.DEFINEPROPERTIES() ================
//Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. 
//A diferença aqui é a possibilidade de serem definidas as características dessas propriedades(para que não aconteça sobreposição).

const moto2 = {}
Object.defineProperties(moto2, {
  rodas: {
    value: 2,
    configurable: false,                // impede deletar e mudança de valor
    enumarable: true,                   // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false,                   // impede mudança de valor
  },
})

moto2.rodas = 4;
delete moto2.capacete;
console.log(moto2);                   // {rodas: 2}

//Existe também o Object.defineProperty, para uma propriedade única.


// =============== GET E SET ================
//É possível definirmos diferentes comportamentos para get e set de uma propriedade.
// Lembrando que ao acionarmos uma propriedade obj.propriedade, 
//a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.

const moto3 = {}
Object.defineProperties(moto3, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})

moto3.velocidade = 200;
console.log(moto3.velocidade);                // Velocidade 200


// =============== OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ) ================
//Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.

console.log(Object.getOwnPropertyDescriptors(moto3));

//Exemplos
Object.getOwnPropertyDescriptors(Array);                     // Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);          // Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');     // Puxa de uma única propriedade


// =============== OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ) ================

Object.keys(Array);                   // [] vazia, pois não possui propriedades enumeráveis


const veiculo2 = {
  marca: 'Ford',
  ano: 2018,
}
Object.keys(veiculo2);          //retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto
// ['marca', 'ano']
Object.values(veiculo2);        //retorna uma array com os valores do objeto
// ['Ford', 2018]
Object.entries(veiculo2);       //retorna uma array com array's contendo a chave e o valor(array dentro de uma array)
// [['marca', 'Ford'], ['ano', 2018]]


// =============== OBJECT.GETOWNPROPERTYNAMES(OBJ) ================
//etorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

console.log(Object.getOwnPropertyNames(moto2));
// ['rodas']


// =============== OBJECT.GETPROTOTYPEOF() E OBJECT.IS() ================

const frutas = ['Banana', 'Pêra']

//Object.getPrototypeOf(), retorna o protótipo do objeto
Object.getPrototypeOf(frutas);          //retorna o protótipo de array
Object.getPrototypeOf('');              // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

//Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.
Object.is(frutas1, frutas2);            // false


// =============== OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS() ================

const caminhao = {
  marca: 'Ford',
  ano: 2018,
}
Object.freeze(caminhao);          //impede qualquer mudança nas propriedades
Object.seal(caminhao);                //previne a adição de novas propriedades e impede que as atuais sejam deletadas
Object.preventExtensions(caminhao);   // previne a adição de novas propriedades.

//para verificar se os métodos estão aplicados 
Object.isFrozen(caminhao);        // true
Object.isSealed(caminhao);        // true
Object.isExtensible(caminhao);    // false


// =============== PROPRIEDADES E MÉTODOS DO PROTÓTIPO ================
//Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. 
//{}.constructor retorna a função construtora do objeto.

const Frutas = ['Banana', 'Uva'];
Frutas.constructor;               // Array

const frase = 'Isso é uma String';
frase.constructor;                // String


// =============== {}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP') ================

const frutas3 = ['Banana', 'Uva'];
//Verifica se possui a propriedade e retorna true. 
//A propriedade deve ser direta do objeto e não do protótipo.

frutas3.hasOwnProperty('map');              // false (pois não possui a propriedade)
Array.hasOwnProperty('map');                // false
Array.prototype.hasOwnProperty('map');      // true (é uma propriedade do array.prototype)

//O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.
Array.prototype.propertyIsEnumerable('map');  // false
window.propertyIsEnumerable('innerHeight');   // true (propriedade do window)


// =============== {}.ISPROTOTYPEOF(VALOR) ================
//Verifica se é o protótipo do valor passado.

const frutasCesta = ['Banana', 'Uva'];

Array.prototype.isPrototypeOf(frutasCesta);  // true


// =============== {}.TOSTRING() ================
//Retorna o tipo do objeto. 
//O problema é toString() ser uma função dos protótipos de Array, String e mais. 
//Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).

const frutasCesta2 = ['Banana', 'Uva'];
frutasCesta2.toString();                          // 'Banana,Uva'
typeof frutasCesta2;                              // object
console.log(Object.prototype.toString.call(frutasCesta2));     // [object Array]

const texto = 'Uma String';
texto.toString();                           // 'Uma String'
typeof texto;                              // string
console.log(Object.prototype.toString.call(texto)) ; // [object String]

const veiculo3 = {marca: 'Ford'};
veiculo3.toString();                        // [object Object]
typeof veiculo3;                            // object
console.log(Object.prototype.toString.call(veiculo3)); // [object Object]

const li = document.querySelectorAll('li');
typeof li;                                    // object
console.log(Object.prototype.toString.call(li)); // [object NodeList]


// =============== OBJECT ================





// =============== OBJECT ================





// =============== OBJECT ================



// =============== OBJECT ================
