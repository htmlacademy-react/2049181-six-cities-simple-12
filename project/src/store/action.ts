import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, City } from '../const';
import { Offers } from '../types/offer';
import { Reviews } from '../types/review';

export const loadAllOffers = createAction<Offers>('offers/loadAllOffers');
export const loadReviews = createAction<Reviews>('reviews/loadReviews');
export const changeCity = createAction<City>('misc/changeCity');
export const changeAuthorizationStatus = createAction<AuthorizationStatus>('user/changeAuthorizationStatus');
export const setUserEmail = createAction<string>('user/setUserEmail');
export const setUserAvatarUrl = createAction<string>('user/setUserAvatarUrl');
