import { Offer} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type ListOffersProps = {
    offers: Offer[],
    onPlaceCardHover?: (offer: Offer) => void
};

function ListOffers ({offers, onPlaceCardHover}: ListOffersProps){
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onMouseOver={onPlaceCardHover}
          />
        ))
      }
    </div>
  );
}

export default ListOffers;
