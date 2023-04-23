import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, City } from '../const';
import { Offers, Offer } from '../types/offer';
import { Reviews } from '../types/review';

export const loadAllOffers = createAction<Offers>('offers/loadAllOffers');
export const loadOffer = createAction<Offer>('offers/loadOffer');
export const loadNearbyOffers = createAction<Offers>('offers/loadNearbyOffers');
export const loadReviews = createAction<Reviews>('reviews/loadReviews');
export const changeCity = createAction<City>('misc/changeCity');
export const changeAuthorizationStatus = createAction<AuthorizationStatus>('user/changeAuthorizationStatus');
export const changeCurrentOfferDataLoadingStatus = createAction<boolean>('changeCurrentOfferDataLoadingStatus');
export const setUserEmail = createAction<string>('user/setUserEmail');
export const setUserAvatarUrl = createAction<string>('user/setUserAvatarUrl');
