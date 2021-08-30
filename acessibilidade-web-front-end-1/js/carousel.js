const btns = document.querySelectorAll('.listaDeArtigos-slider-item');

// Percorre todos os botoes controladores
btns.forEach((btn) => {
  btn.addEventListener('click', () => {

    // Remove classe 'ativo' dos outros botoes
    btns.forEach((btnRemoveClass) => {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo');
    });

    this.classList.add('listaDeArtigos-slider-item--ativo');
  });
});