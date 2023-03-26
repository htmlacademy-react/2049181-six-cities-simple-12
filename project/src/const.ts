export enum AppRoute {
  Root = '/',
  City = '/:selectedCity',
  Main = '/main',
  Login = '/login',
  Room = ':city/offer/:id',
  DevMainEmpty = 'dev-main-empty',
  DevPropertyNotLogged = 'dev-room-not-logged'
}

export enum ClassType {
  OfferPage = 'property',
  OfferCard = 'place-card'
}

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const MAX_OFFER_GALLERY_IMAGES = 6;
export const DEFAULT_CITY = City.Paris;
