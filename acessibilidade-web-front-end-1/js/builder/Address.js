export class AddressBuilder {
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
