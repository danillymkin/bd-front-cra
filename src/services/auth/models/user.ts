import { Note } from '../../note/models/note';

export interface User {
  id: number;
  email: string;
  roles: Role[];
  isActivated: boolean;
  firstName: string;
  lastName: string;
  patronymic: string | null;
  address: string | null;
  phone: string | null;
  fax: string | null;
  account: string | null;
  notes?: Note[];
  createdAt: string;
  updatedAt: string;
}

export enum Role {
  USER = 'USER',
  STAFF = 'STAFF',
}
