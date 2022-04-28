import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { carsSlice } from './cars/carsSlice';
import { authSlice } from './auth/authSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [carsSlice.name]: carsSlice.reducer,
      [authSlice.name]: authSlice.reducer,
    },
  });
};

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
