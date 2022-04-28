import { CarsState } from './carsTypes';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import CarsService from '../../services/car/CarsService';
import { AllAndCount } from '../../http/types/AllAndCount';
import { Car } from '../../services/car/models/car';
import { ServerError } from '../../http/types/ServerError';

const initialState: CarsState = {
  loading: false,
  error: null,
  cars: [],
  totalCars: 0,
};

export const fetchAllCars = createAsyncThunk<AllAndCount<Car>,
  void,
  { rejectValue: ServerError }>('cars/fetchAllCars', async (_, thunkApi) => {
  const response = await CarsService.getAll();
  if (response.status !== 200) {
    return thunkApi.rejectWithValue(response.data as ServerError);
  }
  return response.data as AllAndCount<Car>;
});

export const fetchCarById = createAsyncThunk<Car,
  number | string,
  { rejectValue: ServerError }>('cars/fetchCarById', async (id: number | string, thunkApi) => {
  const response = await CarsService.getById(id);
  if (response.status !== 200) {
    return thunkApi.rejectWithValue(response.data as ServerError);
  }
  return response.data as Car;
});

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCarsData: (
      state: CarsState,
      action: PayloadAction<AllAndCount<Car>>,
    ) => {
      state.cars = action.payload[0];
      state.totalCars = action.payload[1];
    },
    clearCarsState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCars.pending, (state: CarsState) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchAllCars.fulfilled,
      (state: CarsState, action: PayloadAction<AllAndCount<Car>>) => {
        state.loading = false;
        state.cars = action.payload[0];
        state.totalCars = action.payload[1];
      },
    );
    builder.addCase(fetchAllCars.rejected, (state: CarsState, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = {
          error: action.payload.error,
          statusCode: action.payload.statusCode,
          messages: action.payload.messages,
        };
      } else {
        state.error = {
          messages: ['Не удалось получить список автомобилей'],
          error: action.error.message || 'Bad Request',
          statusCode: 400,
        };
      }
    });

    builder.addCase(fetchCarById.pending, (state: CarsState) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchCarById.fulfilled,
      (state: CarsState, action: PayloadAction<Car>) => {
        state.loading = false;
        state.cars = [action.payload];
        state.totalCars = 1;
      },
    );
    builder.addCase(fetchCarById.rejected, (state: CarsState, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = {
          error: action.payload.error,
          messages: action.payload.messages,
          statusCode: action.payload.statusCode,
        };
      } else {
        state.error = {
          error: action.error.message || 'Bad Request',
          statusCode: 400,
          messages: ['Не удалось получить автомобиль'],
        };
      }
    });
  },
});

export const { clearCarsState, setCarsData } = carsSlice.actions;
