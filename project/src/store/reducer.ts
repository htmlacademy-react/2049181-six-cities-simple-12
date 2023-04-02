import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadReviews, loadAllOffers, setAllOffersLoadingStatus, changeAuthorizationStatus } from './action';
import { Offer } from '../types/offer';
import { AuthorizationStatus, City } from '../const';
import { Review } from '../types/review';

type InitialState = {
  allOffers: Offer[];
  reviews: Review[];
  city: City;
  allOffersDataLoadingStatus: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  allOffers: [],
  reviews: [],
  city: City.Paris,
  allOffersDataLoadingStatus: false,
  authorizationStatus: AuthorizationStatus.Unknown
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
    })
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
