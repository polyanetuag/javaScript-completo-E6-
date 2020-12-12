//=========  VALIDAR CEP ==========

const regexpCEP = /\d{5}[-\s]?\d{3}/g

const ceps = [
  '00000-000',
  '00000 000',
  '00000000'
];

for(cep of ceps) {
  console.log(cep, cep.match(regexpCEP))
}

//========= VALIDAR CPF ========

const regexpCPF = /(?:\d{3}[-.]?)\d{2}/g


//========= VALIDAR CNPJ ==========

const regexCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{2}/g;

//========= VALIDAR TELEFONE =========

const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g

//========= VALIDAR EMAIL =========

const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w-.]/gi


//========= VALIDAR TAG =========

const regexpTAG = /<\/?[\w\s="']+\/?>/gi

// ========== VALIDAR APENAS O NOME DA TAG ============

const regexpNOMETAG = /(?<=<\/?)[\w]+/gi;