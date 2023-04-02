import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, City } from '../const';
import { Offers } from '../types/offer';
import { Reviews } from '../types/review';

export const loadAllOffers = createAction<Offers>('loadAllOffers');
export const loadReviews = createAction<Reviews>('loadReviews');
export const changeCity = createAction<City>('changeCity');
export const setAllOffersLoadingStatus = createAction<boolean>('setAllOffersLoadingStatus');
export const changeAuthorizationStatus = createAction<AuthorizationStatus>('changeAuthorizationStatus');
