const new0 = document.querySelector('#new0');
const new1 = document.querySelector('#new1');
const new2 = document.querySelector('#new2');


new0.style.display = 'block'
const btns = document.querySelectorAll('.listaDeArtigos-slider-item');

// Percorre todos os botoes controladores

for (const button of btns) {
  button.addEventListener('click', () => {
    const dataSliderItem = button.getAttribute('data-sliderItem');
    if (dataSliderItem === '0') {
      new0.style.display = 'block';
      new1.style.display = 'none';
      new2.style.display = 'none';
    } else if (dataSliderItem === '1') {
      new0.style.display = 'none';
      new1.style.display = 'block';
      new2.style.display = 'none';
    } else {
      new0.style.display = 'none';
      new1.style.display = 'none';
      new2.style.display = 'block';
    }
    // Remove classe 'ativo' dos outros botoes
    for (const buttonRemoveClass of btns) {
      buttonRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo');
    }
    button.classList.add('listaDeArtigos-slider-item--ativo');
  });
}
