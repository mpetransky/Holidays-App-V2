import { hotels } from '/src/js/data.js';

class OffersModel {

    offers;

    constructor() {
        this.offers = hotels;
    }
}

export default new OffersModel();
