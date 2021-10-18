import { AddressBuilder } from './builder/Address.js';

export async function getCityData() {
    const zipCodeNumber = document.getElementById('cep').value;
    if (zipCodeNumber === '' || zipCodeNumber.trim() === '') {
        return;
    }
    try {
        const zipCodeInfo = await axios.get(`https://viacep.com.br/ws/${zipCodeNumber}/json/`);

        const { bairro: neighbour, logradouro: address, localidade: city, uf: state } = zipCodeInfo.data;

        new AddressBuilder()
            .address(address)
            .neighbour(neighbour)
            .city(city)
            .state(state);
    } catch (err) {
        console.error(err);
    }
}
