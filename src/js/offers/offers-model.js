import { hotels } from '/js/data.js';

class OffersModel {

    offers;

    constructor() {
        this.offers = hotels;
    }
}

export default new OffersModel();
