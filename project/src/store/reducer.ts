import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getReviews, getAllOffers } from './action';
import { Offer } from '../types/offer';
import { City } from '../const';
import { Review } from '../types/review';

type InitialState = {
  allOffers: Offer[];
  reviews: Review[];
  city: City;
}

const initialState: InitialState = {
  allOffers: [],
  reviews: [],
  city: City.Paris
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllOffers, (state, action) => {
      state.allOffers = action.payload;
    })
    .addCase(getReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});
