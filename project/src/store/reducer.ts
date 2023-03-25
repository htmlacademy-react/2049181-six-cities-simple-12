import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getAllOffers } from './action';
import { Offer } from '../types/offer';
import { offers } from '../mocks/offers';
import { City } from '../const';

type InitialState = {
  allOffers: Offer[];
  city: City;
}
const initialState: InitialState = {
  allOffers: [],
  city: City.Paris
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllOffers, (state) => {
      state.allOffers = offers;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});
