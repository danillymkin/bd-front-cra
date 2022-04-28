import { StoreError } from '../../types/storeError';
import { User } from '../../services/auth/models/user';

export interface AuthState {
  loading: boolean;
  error: StoreError | null;
  accessToken: string | null;
  user: User | null;
}
