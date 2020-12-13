const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {           // desestruturando o array
  return elements.map(element => element.innerText);
}

// limpando os cpfs
const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '')
}

//construir/montar os cpfs
const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

//formatar uma array de cpfs
const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
}

const substituirCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);         //cpfs bagunçados
  const cpfsformatados = formatarCPFS(cpfs)             //cpfs formatados

  cpfsElements.forEach((element, index) => {            //substituir na lista 
    element.innerText = cpfsformatados[index];
  })
}

substituirCPFS(cpfsList)


// console.log(limparCPF('121.121.121 22'))
// console.log(construirCPF('12112112122'))

// const resultado = elementsInnerText(cpfs);
// console.log(formatarCPFS(resultado));



