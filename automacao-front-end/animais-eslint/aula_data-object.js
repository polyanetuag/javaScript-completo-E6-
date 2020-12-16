// ====================== NEW DATE() ====================
//O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.

const hoje = new Date();
hoje;
// Semana Mês Dia Ano HH:MM:SS GMT
hoje.getDate() // Dia
hoje.getDay() // Dia da Semana ex: 5 = Fri
hoje.getMonth() // Número dia mês
hoje.getFullYear() // Ano
hoje.getHours() // Hora
hoje.getMinutes() // Minutos
hoje.getTime() // ms desde 1970
hoje.getUTCHours() - 3 // Brasília

// ====================== GETTIME() ======================
//O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.

const dia = new Date();
dia.getTime(); //

// total de dias desde 1 de janeiro de 1970
const diasPassados = dia.getTime() / (24 * 60 * 60 * 1000);

// ====================== DIAS ATÉ =======================
//Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data.

const diaHoje = new Date();
const promocao = new Date('December 24 2018 23:59');

function converterEmDias(time) {
  return time / (24 * 60 * 60 * 1000);
}

const diasAgora = converterEmDias(diaHoje);
const diasPromocao = converterEmDias(promocao);

const faltam = diasPromocao - diasAgora;


//===========Exemplos===========

const agora = new Date();
const futuro = new Date('Dec 31 2020 23:59');

console.log(agora.getTime());
console.log(agora.getMonth());
console.log(futuro);

function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000);
}

const diasAgora = transformarDias(agora.getTime());
const diasFuturo = transformarDias(futuro.getTime());

console.log(diasFuturo - diasAgora)