// Variáveis
const btnAbreDialog = document.querySelector('#abreDialog');
const dialog = document.querySelector('.dialogNewsletter');
const dialogBody = document.querySelector('.dialogNewsletter-body');
const dialogOverlay = document.querySelector('.dialogNewsletter-overlay');


// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', () => {
  dialog.classList.add('dialogNewsletter--aberto');
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);