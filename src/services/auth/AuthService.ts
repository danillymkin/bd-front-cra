import $api from '../../http';
import { LoginDto } from './dto/loginDto';
import { AxiosResponse } from 'axios';
import { ServerError } from '../../http/types/ServerError';
import { RegisterDto } from './dto/registerDto';
import { UserAndToken } from './models/userAndToken';

const AUTH_PATH = '/auth';

export default class AuthService {
  static async login(
    loginDto: LoginDto,
  ): Promise<AxiosResponse<UserAndToken | ServerError>> {
    return await $api.post<UserAndToken | ServerError>(
      `${AUTH_PATH}/login`,
      loginDto,
    );
  }

  static async register(
    registerDto: RegisterDto,
  ): Promise<AxiosResponse<UserAndToken | ServerError>> {
    return await $api.post<UserAndToken | ServerError>(
      `${AUTH_PATH}/register`,
      registerDto,
    );
  }

  static async refresh(): Promise<AxiosResponse<UserAndToken | ServerError>> {
    return await $api.get<UserAndToken | ServerError>(`${AUTH_PATH}/refresh`);
  }
}
