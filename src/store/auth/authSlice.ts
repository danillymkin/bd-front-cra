import { AuthState } from './authTypes';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ServerError } from '../../http/types/ServerError';
import { LoginDto } from '../../services/auth/dto/loginDto';
import AuthService from '../../services/auth/AuthService';
import { RegisterDto } from '../../services/auth/dto/registerDto';
import { AxiosResponse } from 'axios';
import { ServerErrorData } from '../../http/types/ServerErrorData';
import { UserAndToken } from '../../services/auth/models/userAndToken';

const initialState: AuthState = {
  loading: false,
  error: null,
  accessToken: null,
  user: null,
};

export const login = createAsyncThunk<UserAndToken,
  LoginDto,
  { rejectValue: ServerError }>('auth/login', async (loginDto, thunkApi) => {
  const response = await AuthService.login(loginDto);
  if (response.status >= 300) {
    const error = response as AxiosResponse<ServerErrorData>;
    return thunkApi.rejectWithValue({
      statusCode: error.status,
      error: error.statusText,
      messages: error.data.messages,
    } as ServerError);
  }
  return response.data as UserAndToken;
});

export const register = createAsyncThunk<UserAndToken,
  RegisterDto,
  { rejectValue: ServerError }>('auth/register', async (registerDto, thunkApi) => {
  const response = await AuthService.register(registerDto);
  if (response.status >= 300) {
    console.log(response.data);
    return thunkApi.rejectWithValue(response.data as ServerError);
  }
  return response.data as UserAndToken;
});

export const refresh = createAsyncThunk<UserAndToken,
  void,
  { rejectValue: ServerError }>('auth/refresh', async (_, thunkApi) => {
  const response = await AuthService.refresh();
  if (response.status >= 300) {
    console.log(response.data);
    return thunkApi.rejectWithValue(response.data as ServerError);
  }
  return response.data as UserAndToken;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state: AuthState) => {
      state.loading = true;
      state.error = null;
      state.user = null;
    });
    builder.addCase(
      login.fulfilled,
      (state: AuthState, action: PayloadAction<UserAndToken>) => {
        state.loading = false;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
        state.error = null;
      },
    );
    builder.addCase(login.rejected, (state: AuthState, action) => {
      state.loading = false;
      state.error = {
        error: action.payload?.error || 'Unauthorized',
        statusCode: action.payload?.statusCode || 401,
        messages: action.payload?.messages || [
          'Не удалось войти в аккаунт, попробуйте позже',
        ],
      };
    });

    builder.addCase(register.pending, (state: AuthState) => {
      state.loading = true;
      state.error = null;
      state.user = null;
    });
    builder.addCase(
      register.fulfilled,
      (state: AuthState, action: PayloadAction<UserAndToken>) => {
        state.loading = false;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
        state.error = null;
      },
    );
    builder.addCase(register.rejected, (state: AuthState, action) => {
      state.loading = false;
      state.error = {
        error: action?.payload?.error || 'Unauthorized',
        statusCode: action?.payload?.statusCode || 401,
        messages: action?.payload?.messages || [
          'Не удалось создать аккаунт, попробуйте позже',
        ],
      };
    });

    builder.addCase(refresh.pending, (state: AuthState) => {
      state.loading = true;
      state.error = null;
      state.user = null;
    });
    builder.addCase(
      refresh.fulfilled,
      (state: AuthState, action: PayloadAction<UserAndToken>) => {
        state.loading = false;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
        state.error = null;
      },
    );
    builder.addCase(refresh.rejected, (state: AuthState, action) => {
      state.loading = false;
      state.error = {
        error: action.payload?.error || 'Unauthorized',
        statusCode: action.payload?.statusCode || 401,
        messages: action.payload?.messages || [
          'Не удалось войти в аккаунт, попробуйте позже',
        ],
      };
    });
  },
});

export const { clearAuthState } = authSlice.actions;
