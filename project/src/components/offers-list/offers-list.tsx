import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps): JSX.Element {

  const [activeOfferId, setActiveOfferId] = useState(-1);
  // eslint-disable-next-line no-console
  console.log(activeOfferId);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} setActiveOfferId={setActiveOfferId}/>
      ))}
    </div>
  );
}

export default OffersList;
