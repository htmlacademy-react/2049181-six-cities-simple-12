import { PageType } from '../../const';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';
import classNames from 'classnames';

type OffersListProps = {
  type: PageType;
  offers: Offer[];
}

function OffersList({offers, type}: OffersListProps): JSX.Element {

  const [activeOfferId, setActiveOfferId] = useState(-1);
  // eslint-disable-next-line no-console
  console.log(activeOfferId);

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
