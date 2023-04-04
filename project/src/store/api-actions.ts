import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance} from 'axios';
import { Offers } from '../types/offer';
import { APIRoute, AuthorizationStatus } from '../const';
import { changeAuthorizationStatus, loadAllOffers, setAllOffersLoadingStatus } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

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
      console.log('auth');
    } catch {
      dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);


export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const data = await api.post<UserData>(APIRoute.Login, {email, password});
      console.log(data);
      dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      console.log('login error');
    }
  }
);
