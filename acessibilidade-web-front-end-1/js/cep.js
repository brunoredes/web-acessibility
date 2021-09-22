async function getCityData() {
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

        console.log(zipCodeInfo);
    } catch (err) {
        console.error(err);
    }
}
class AddressBuilder {
    address(address) {
        const neighbourValue = document.querySelectorAll('.contatoCampo-campoDesabilitado')[0];
        neighbourValue.setAttribute('value', address);
        return this;
    }
    neighbour(neighbourName) {
        const addressValue = document.querySelectorAll('.contatoCampo-campoDesabilitado')[1];
        addressValue.setAttribute('value', neighbourName);
        return this;
    }
    city(cityName) {
        const cityValue = document.querySelectorAll('.contatoCampo-campoDesabilitado')[2];
        cityValue.setAttribute('value', cityName);
        return this;
    }
    state(stateName) {
        const stateValue = document.querySelectorAll('.contatoCampo-campoDesabilitado')[3];
        stateValue.setAttribute('value', stateName);
    }
}