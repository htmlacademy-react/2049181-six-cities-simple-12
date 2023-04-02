import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadReviews, loadAllOffers, setAllOffersLoadingStatus } from './action';
import { Offer } from '../types/offer';
import { City } from '../const';
import { Review } from '../types/review';

type InitialState = {
  allOffers: Offer[];
  reviews: Review[];
  city: City;
  allOffersDataLoadingStatus: boolean;
}

const initialState: InitialState = {
  allOffers: [],
  reviews: [],
  city: City.Paris,
  allOffersDataLoadingStatus: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllOffers, (state, action) => {
      state.allOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setAllOffersLoadingStatus, (state, action) => {
      state.allOffersDataLoadingStatus = action.payload;
    });
});
