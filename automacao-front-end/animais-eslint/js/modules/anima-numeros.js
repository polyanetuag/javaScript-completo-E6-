export default function initAnimaNumeros(){

  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]')
    
    numeros.forEach((numero) => {
      const total =+numero.innerText;
      const incremento = Math.floor(total / 100);
      
      let start = 0
      const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = start
        if(start > total) {
          numero.innerText = total        // para dar corretamente o valor corretamente 
          clearInterval(timer)
        }
      }, 25);                             //* Math.random() - para animar de forma aleatoria
    })
  }
  
  function handleMutation(mutation) {         // para que a animação ocorra quando o usuário estiver na tela 
    if(mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }
  
  const observerTarget = document.querySelector('.numeros')
  const observer = new MutationObserver(handleMutation);
  
  observer.observe(observerTarget, {attributes:true});
}






