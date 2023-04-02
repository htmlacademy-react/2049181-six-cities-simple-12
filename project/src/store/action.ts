import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, City } from '../const';
import { Offers } from '../types/offer';
import { Reviews } from '../types/review';

export const loadAllOffers = createAction<Offers>('offers/loadAllOffers');
export const loadReviews = createAction<Reviews>('reviews/loadReviews');
export const changeCity = createAction<City>('misc/changeCity');
export const setAllOffersLoadingStatus = createAction<boolean>('misc/setAllOffersLoadingStatus');
export const changeAuthorizationStatus = createAction<AuthorizationStatus>('user/changeAuthorizationStatus');
