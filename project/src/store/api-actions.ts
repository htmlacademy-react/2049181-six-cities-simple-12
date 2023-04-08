import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance} from 'axios';
import { Offers } from '../types/offer';
import { APIRoute, AuthorizationStatus } from '../const';
import { changeAuthorizationStatus, loadAllOffers, setUserAvatarUrl, setUserEmail } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken } from '../services/token';

export const fetchAllOffersAction = createAsyncThunk<void, undefined, {
 dispatch: AppDispatch;
 state: State;
 extra: AxiosInstance;
}>(
  'offers/fetchAllOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
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
      const data = await api.get<UserData>(APIRoute.Login);
      dispatch(setUserEmail(data.data.email));
      dispatch(setUserAvatarUrl(data.data.avatarUrl));
      dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
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
      saveToken(data.data.token);
      dispatch(setUserEmail(data.data.email));
      dispatch(setUserAvatarUrl(data.data.avatarUrl));
      dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);
