import { User } from '../../auth/models/user';

export interface Note {
  id: number;
  text: string;
  clientId: number;
  user: User;
  createdAt: string;
  updatedAt: string;
}
