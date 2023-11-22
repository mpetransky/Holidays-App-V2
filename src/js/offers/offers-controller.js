import OffersModel from '/src/js/offers/offers-model.js';
import OffersView from '/src/js/offers/offers-view.js';

class OffersController {
    constructor() {

    }

    init() {
        const randomOffers = this.findFourRandomOffers(OffersModel.offers);
        
        OffersView.showOffers(randomOffers);
    }

    findFourRandomOffers(offers) {
        const randomOffers = [];

        for (let i = 0; i < 4; i++) {
            const j = Math.trunc(Math.random()*20);
            
            randomOffers.push(offers[j]);
        }

        return randomOffers;
    }
}

export default new OffersController();