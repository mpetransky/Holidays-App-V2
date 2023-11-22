const offersContainer = document.querySelector('.offers__container');

const stars = new Map([
    [3, "&starf;&starf;&starf;"],
    [4, "&starf;&starf;&starf;&starf;"],
    [5, "&starf;&starf;&starf;&starf;&starf;"],
    [6, "&starf;&starf;&starf;&starf;&starf;&starf;"],
  ]);

class OffersView {

    constructor() {
    }

    showOffers(offers) {
        offersContainer.innerHTML = '';
        
        offers.forEach(offer => {
            offersContainer.insertAdjacentHTML('beforeend', this.createOfferElement(offer));
        });
    }

    createOfferElement(offer) {
        const randomNumber = Math.trunc(Math.random()*5) + 1;
        const randomImage = `${offer.country}/${offer.country}_hotel_${randomNumber}.webp`;

        return `
            <div class="offer card clickable">
                <img class="offer__image" src="src/img/destinations/${randomImage}" alt="Hotel in Oman.">

                <h6 class="offer__name">${offer.name}<br><span class="star">${stars.get(offer.stars)}</span></h6>
                
                <div class="offer_distances flex flex--row">
                    <div class="flex flex--column">
                        <p>${offer.distances.airport} h</p>
                        <p class="small light uppercase">Airport</p>
                    </div>
                    <div class="flex flex--column">
                        <p>${offer.distances.beach} m</p>
                        <p class="small light uppercase">Beach</p>
                    </div>
                    <div class="flex flex--column">
                        <p>${offer.distances.city} km</p>
                        <p class="small light uppercase">City Center</p>
                    </div>
                </div>
                
                <p class="offer__destination small light uppercase"> ${offer.country} > <span class="bold">${offer.region}</span></p>

                <h6 class="offer__price">from &euro; ${offer.price}</h6>
            </div>        
        `;
    }
}

export default new OffersView();