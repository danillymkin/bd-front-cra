import { AuthState } from './authTypes';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccessToken } from '../../services/auth/models/accessToken';
import { ServerError } from '../../http/types/ServerError';
import { LoginDto } from '../../services/auth/dto/loginDto';
import AuthService from '../../services/auth/AuthService';
import { RegisterDto } from '../../services/auth/dto/registerDto';
import { AxiosResponse } from 'axios';
import { ServerErrorData } from '../../http/types/ServerErrorData';
import { User } from '../../services/auth/models/user';

const initialState: AuthState = {
  loading: false,
  error: null,
  accessToken: null,
  user: null,
};

export const login = createAsyncThunk<AccessToken,
  LoginDto,
  { rejectValue: ServerError }>('auth/login', async (loginDto, thunkApi) => {
  const response = await AuthService.login(loginDto);
  // console.log(response);
  if (response.status >= 300) {
    const error = response as AxiosResponse<ServerErrorData>;
    return thunkApi.rejectWithValue({
      statusCode: error.status,
      error: error.statusText,
      messages: error.data.messages,
    } as ServerError);
  }
  return response.data as AccessToken;
});

export const register = createAsyncThunk<AccessToken,
  RegisterDto,
  { rejectValue: ServerError }>('auth/register', async (registerDto, thunkApi) => {
  const response = await AuthService.register(registerDto);
  if (response.status >= 300) {
    console.log(response.data);
    return thunkApi.rejectWithValue(response.data as ServerError);
  }
  return response.data as AccessToken;
});

export const profile = createAsyncThunk<User,
  void,
  { rejectValue: ServerError }>('auth/profile', async (_, thunkApi) => {
  const response = await AuthService.profile();
  // console.log(response);
  if (response.status >= 300) {
    console.log(response.data);
    return thunkApi.rejectWithValue(response.data as ServerError);
  }
  return response.data as User;
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
    });
    builder.addCase(
      login.fulfilled,
      (state: AuthState, action: PayloadAction<AccessToken>) => {
        state.loading = false;
        state.accessToken = action.payload.accessToken;
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
    });
    builder.addCase(
      register.fulfilled,
      (state: AuthState, action: PayloadAction<AccessToken>) => {
        state.loading = false;
        state.accessToken = action.payload.accessToken;
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

    builder.addCase(profile.pending, (state: AuthState) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      profile.fulfilled,
      (state: AuthState, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      },
    );
    builder.addCase(profile.rejected, (state: AuthState, action) => {
      state.loading = false;
      state.error = {
        error: action?.payload?.error || 'Unauthorized',
        statusCode: action?.payload?.statusCode || 401,
        messages: action?.payload?.messages || [
          'Не удалось получить ваш профиль, попробуйте позже',
        ],
      };
    });
  },
});

export const { clearAuthState } = authSlice.actions;
