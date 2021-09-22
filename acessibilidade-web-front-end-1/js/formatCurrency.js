const prices = document.querySelectorAll('.secaoPlanos-plano-preco');

for (const price of prices) {
    price.textContent = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumSignificantDigits: 1 }).format(price.outerText);
}