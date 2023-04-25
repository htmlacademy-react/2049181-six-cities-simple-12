export enum AppRoute {
  Root = '/',
  Main = '/main',
  Login = '/login',
  Room = '/offer/:id',
  DevMainEmpty = 'dev-main-empty',
  DevPropertyNotLogged = 'dev-room-not-logged'
}

export enum ClassType {
  OfferPage = 'property',
  OfferCard = 'place-card'
}

export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRated = 'Top rated first'
}

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Comments = '/comments/'
}

export enum AuthorizationStatus {
  Unknown = 'UNKNOWN',
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH'
}

export enum PageType {
  Cities = 'cities',
  Near = 'near'
}

export const RatingTitle = new Map([
  [5, 'perfect'],
  [4, 'good'],
  [3, 'not bad'],
  [2, 'badly'],
  [1, 'terribly']
]);

export const MAX_OFFER_GALLERY_IMAGES = 6;
export const MAX_RATING_STARS = 5;
export const MAX_REVIEWS_COUNT = 10;
export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_LENGTH = 300;
export const DEFAULT_CITY = City.Paris;
