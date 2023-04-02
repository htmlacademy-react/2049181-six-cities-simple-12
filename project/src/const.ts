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

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum APIRoute {
  Offers = '/hotels'
}

export enum AuthorizationStatus {
  Unknown = 'UNKNOWN',
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH'
}

export const MAX_OFFER_GALLERY_IMAGES = 6;
export const DEFAULT_CITY = City.Paris;
