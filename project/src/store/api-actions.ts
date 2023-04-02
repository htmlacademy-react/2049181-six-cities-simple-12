import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance} from 'axios';
import { Offers } from '../types/offer';
import { APIRoute, AuthorizationStatus } from '../const';
import { changeAuthorizationStatus, loadAllOffers, setAllOffersLoadingStatus } from './action';

export const fetchAllOffersAction = createAsyncThunk<void, undefined, {
 dispatch: AppDispatch;
 state: State;
 extra: AxiosInstance;
}>(
  'offers/fetchAllOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setAllOffersLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setAllOffersLoadingStatus(false));
    dispatch(loadAllOffers(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);
