import $api from '../../http';
import { LoginDto } from './dto/loginDto';
import { AxiosResponse } from 'axios';
import { AccessToken } from './models/accessToken';
import { ServerError } from '../../http/types/ServerError';
import { RegisterDto } from './dto/registerDto';
import { User } from './models/user';

const AUTH_PATH = '/auth';

export default class AuthService {
  static async login(
    loginDto: LoginDto,
  ): Promise<AxiosResponse<AccessToken | ServerError>> {
    return await $api.post<AccessToken | ServerError>(
      `${AUTH_PATH}/login`,
      loginDto,
    );
  }

  static async register(
    registerDto: RegisterDto,
  ): Promise<AxiosResponse<AccessToken | ServerError>> {
    return await $api.post<AccessToken | ServerError>(
      `${AUTH_PATH}/register`,
      registerDto,
    );
  }

  static async profile(): Promise<AxiosResponse<User | ServerError>> {
    return await $api.get<User | ServerError>(`${AUTH_PATH}/profile`);
  }
}
