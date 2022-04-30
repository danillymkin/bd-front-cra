import { User } from './user';

export interface UserAndToken {
  user: User;
  accessToken: string;
}