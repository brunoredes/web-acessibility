const new0 = document.querySelector('#new0');
const new1 = document.querySelector('#new1');
const new2 = document.querySelector('#new2');
const noticias = document.querySelectorAll('.listaDeArtigos-item')

new0.style.display = 'block'
const btns = document.querySelectorAll('.listaDeArtigos-slider-item');

let indicadorSlideAtual = document.createElement('span');
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.textContent = "(Slide atual)";
indicadorSlideAtual.id = 'escondeVisualmente';

// Percorre todos os botoes controladores

for (const button of btns) {
  button.addEventListener('click', function () {

    noticias.forEach(function (noticia) {
      const dataSliderItem = this.getAttribute('data-sliderItem');
      noticia.style.display = 'none';
      const dataNoticia = noticia.getAttribute('data-noticia');
      if (dataSliderItem === dataNoticia) {
        noticia.style.display = 'block';
      }
    }.bind(this));

    document.querySelector('.listaDeArtigos-slider-item .escondeVisualmente').remove();
    this.append(indicadorSlideAtual);
    // Remove classe 'ativo' dos outros botoes
    for (const buttonRemoveClass of btns) {
      buttonRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo');
    }
    button.classList.add('listaDeArtigos-slider-item--ativo');
  });
}
