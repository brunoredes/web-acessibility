// Variáveis
const conteudoForaDialog = document.querySelector('#conteudoForaDialog');

const btnAbreDialog = document.querySelector('#abreDialog');
const dialog = document.querySelector('.dialogNewsletter');
const dialogBody = document.querySelector('.dialogNewsletter-body');
const dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

btnAbreDialog.style.display = 'block';
// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', () => {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.dialogNewsletter-campo').focus();
  conteudoForaDialog.setAttribute('inert', '');
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');
  conteudoForaDialog.removeAttribute('inert');

  btnAbreDialog.focus();
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);