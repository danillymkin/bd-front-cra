import { LoginDto } from './loginDto';

export type RegisterDto = {
  firstName: string;
  lastName: string;
} & LoginDto;
