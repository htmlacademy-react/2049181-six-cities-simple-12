import { PageType } from '../../const';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

type OffersListProps = {
  type: PageType;
  offers: Offer[];
  onSelectedPinChange: (id: number) => void;
}

function OffersList({offers, type, onSelectedPinChange}: OffersListProps): JSX.Element {

  const [activeOfferId, setActiveOfferId] = useState(-1);
  useEffect(() => {
    onSelectedPinChange(activeOfferId);
  }, [activeOfferId, onSelectedPinChange]);

  return (
    <div className={
      classNames({
        [`${type}-places__list`]: type === PageType.Near,
        [`${type}__places-list`]: type === PageType.Cities,
        'places__list': true,
        'tabs__content': type === PageType.Cities
      })
    }
    >
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} setActiveOfferId={setActiveOfferId}/>
      ))}
    </div>
  );
}

export default OffersList;
