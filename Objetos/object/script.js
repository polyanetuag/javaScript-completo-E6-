
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


// =============== OBJECT ================





// =============== OBJECT ================





// =============== OBJECT ================






// =============== OBJECT ================





// =============== OBJECT ================





// =============== OBJECT ================





// =============== OBJECT ================





// =============== OBJECT ================





// =============== OBJECT ================




// =============== OBJECT ================





// =============== OBJECT ================





// =============== OBJECT ================



// =============== OBJECT ================
