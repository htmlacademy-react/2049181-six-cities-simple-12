import { createAction } from '@reduxjs/toolkit';
import { City } from '../const';
import { Offers } from '../types/offer';
import { Reviews } from '../types/review';

export const getAllOffers = createAction<Offers>('getAllOffers');
export const getReviews = createAction<Reviews>('getReviews');
export const changeCity = createAction<City>('changeCity');
