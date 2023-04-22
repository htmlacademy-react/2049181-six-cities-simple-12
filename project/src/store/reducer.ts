import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadReviews, loadAllOffers, changeAuthorizationStatus, setUserEmail, setUserAvatarUrl, loadNearbyOffers, loadOffer } from './action';
import { Offer } from '../types/offer';
import { AuthorizationStatus, City } from '../const';
import { Review } from '../types/review';
import { fetchAllOffersAction, fetchCommentsAction, fetchOfferAction } from './api-actions';

type InitialState = {
  allOffers: Offer[];
  currentOffer: Offer | null;
  currentOfferDataLoadingStatus: boolean;
  nearbyOffers: Offer[];
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
  currentOffer: null,
  currentOfferDataLoadingStatus: true,
  nearbyOffers: [],
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
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
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
    .addCase(fetchCommentsAction.rejected, (state) => {
      state.reviewsDataLoadingStatus = false;
    })
    .addCase(fetchCommentsAction.fulfilled, (state) => {
      state.reviewsDataLoadingStatus = false;
    })
    .addCase(fetchOfferAction.pending, (state) => {
      state.currentOfferDataLoadingStatus = true;
    })
    .addCase(fetchOfferAction.rejected, (state) => {
      state.currentOfferDataLoadingStatus = false;
    })
    .addCase(fetchOfferAction.fulfilled, (state) => {
      state.currentOfferDataLoadingStatus = false;
    });
});
