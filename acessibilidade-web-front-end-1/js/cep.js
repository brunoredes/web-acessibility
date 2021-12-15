import { AddressBuilder } from './builder/Address.js';

async function getCityData() {
    const zipCodeNumber = document.getElementById('cep').value.replace('-', '');
    if (zipCodeNumber === '' || zipCodeNumber.trim() === '') {
        return;
    }
    try {
        const zipCodeInfo = await axios.get(`https://viacep.com.br/ws/${zipCodeNumber}/json/`);

        const { bairro: neighbour, logradouro: address, localidade: city, uf: state } = zipCodeInfo.data;

        return new AddressBuilder()
            .address(address)
            .neighbour(neighbour)
            .city(city)
            .state(state);
    } catch (err) {
        console.error({ 'Viacep api error': err });
    }
}

document.querySelector('#cep').addEventListener('blur', getCityData);
