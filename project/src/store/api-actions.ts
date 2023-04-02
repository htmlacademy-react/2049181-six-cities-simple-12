import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import {AxiosInstance} from 'axios';
import { Offers } from '../types/offer';
import { APIRoute } from '../const';
import { loadAllOffers, setAllOffersLoadingStatus } from './action';

export const fetchAllOffers = createAsyncThunk<void, undefined, {
 dispatch: AppDispatch;
 state: State;
 extra: AxiosInstance;
}>(
  'fetchAllOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setAllOffersLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setAllOffersLoadingStatus(false));
    dispatch(loadAllOffers(data));
  }
);
