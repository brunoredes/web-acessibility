const btns = document.querySelectorAll('.listaDeArtigos-slider-item');

// Percorre todos os botoes controladores

for (const button of btns) {
  button.addEventListener('click', () => {
    // Remove classe 'ativo' dos outros botoes
    for (const buttonRemoveClass of btns) {
      buttonRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo');
    }
    this.classList.add('listaDeArtigos-slider-item--ativo');
  });
}
