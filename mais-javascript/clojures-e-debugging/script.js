debugger;
function contagem() {
  let total = 0;
  return function incremento() {
    total++;                          //clojure
    console.log(total)
  }
}

const ativarIncremento = contagem();
ativarIncremento();