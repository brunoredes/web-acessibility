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
            distanceFunction: superStringDistance,  // optional
            suggested: function (suggestion) {
                console.log(suggestion.full);
            }
        });
    });