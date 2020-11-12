export default function outsideClick(element,events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if(!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      html.addEventListener(userEvent, handleOutsideClick);
    })
  element.setAttribute(outside, '');                      // para evitar que vários eventos sejam disparados com o click
  }
  function handleOutsideClick(event) {
    if(!element.contains(event.target)) {             // para fechar o menu(quando ativado) clicando fora do menu
      element.removeAttribute(outside); 
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);
      })
      callback();
    }
  }
}