import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getReviews, getAllOffers } from './action';
import { Offer } from '../types/offer';
import { offers } from '../mocks/offers';
import { City } from '../const';
import { Review } from '../types/review';
import { reviews } from '../mocks/reviews';

type InitialState = {
  allOffers: Offer[];
  reviews: Review[];
  city: City;
}

const initialState: InitialState = {
  allOffers: offers,
  reviews: reviews,
  city: City.Paris
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllOffers, (state) => {
      state.allOffers = offers;
    })
    .addCase(getReviews, (state) => {
      state.reviews = reviews;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});
