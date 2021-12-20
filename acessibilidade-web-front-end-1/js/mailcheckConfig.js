const campoEmail = document.querySelector('#email');
const sugestao = document.querySelector('#sugestao');
const domains = ['gmail.com', 'uol.com', 'outlook.com'];
const secondLevelDomains = ['hotmail']
const topLevelDomains = ["com", "net", "org", 'br'];

const superStringDistance = function (string1, string2) {
    // a string distance algorithm of your choosing
}

campoEmail
    .addEventListener('blur', function () {
        Mailcheck.run({
            email: campoEmail.value,
            domains: domains,                       // optional
            topLevelDomains: topLevelDomains,       // optional
            secondLevelDomains: secondLevelDomains, // optional
            suggested: function (suggestion) {
                sugestao.style.display = 'inline-block';
                sugestao.textContent = `Você quis dizer: ${suggestion.full} ?`;
                sugestao.parentNode.classList.add('contatoCampo--erro');
                campoEmail.classList.add('contatoCampo--validouErro');
                sugestao.setAttribute('tabindex', '0');
                sugestao.setAttribute('role', 'alert');
            }
        });
    });