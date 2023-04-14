import { SortType } from '../const';
import { Offers } from '../types/offer';

const sortOffers = (offers: Offers, sortType: SortType): Offers => {
  const offersCopy = offers.slice();
  switch (sortType) {
    case SortType.PriceHighToLow:
      return offersCopy.sort((offerA, offerB) => offerB.price - offerA.price);
    case SortType.PriceLowToHigh:
      return offersCopy.sort((offerA, offerB) => offerA.price - offerB.price);
    case SortType.TopRated:
      return offersCopy.sort((offerA, offerB) => offerB.rating - offerA.rating);
  }

  return offersCopy;
};

export {sortOffers};
