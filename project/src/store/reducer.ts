import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadReviews, loadAllOffers, changeAuthorizationStatus, setUserEmail, setUserAvatarUrl } from './action';
import { Offer } from '../types/offer';
import { AuthorizationStatus, City } from '../const';
import { Review } from '../types/review';
import { fetchAllOffersAction, fetchCommentsAction } from './api-actions';

type InitialState = {
  allOffers: Offer[];
  reviews: Review[];
  city: City;
  allOffersDataLoadingStatus: boolean;
  reviewsDataLoadingStatus: boolean;
  authorizationStatus: AuthorizationStatus;
  userEmail: string;
  userAvatarUrl: string;
}

const initialState: InitialState = {
  allOffers: [],
  reviews: [],
  city: City.Paris,
  allOffersDataLoadingStatus: true,
  reviewsDataLoadingStatus: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: '',
  userAvatarUrl: ''
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
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(setUserAvatarUrl, (state, action) => {
      state.userAvatarUrl = action.payload;
    })
    .addCase(fetchAllOffersAction.pending, (state) => {
      state.allOffersDataLoadingStatus = true;
    })
    .addCase(fetchAllOffersAction.fulfilled, (state) => {
      state.allOffersDataLoadingStatus = false;
    })
    .addCase(fetchCommentsAction.pending, (state) => {
      state.reviewsDataLoadingStatus = true;
    })
    .addCase(fetchCommentsAction.fulfilled, (state) => {
      state.reviewsDataLoadingStatus = false;
    });
});
