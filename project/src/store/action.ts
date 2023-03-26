import { createAction } from '@reduxjs/toolkit';
import { City } from '../const';


export const getAllOffers = createAction('getAllOffers');
export const changeCity = createAction<City>('changeCity');