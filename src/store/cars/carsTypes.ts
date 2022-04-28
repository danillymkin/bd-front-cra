import { Car } from '../../services/car/models/car';
import { StoreError } from '../../types/storeError';

export interface CarsState {
  loading: boolean;
  error: null | StoreError;
  cars: Car[];
  totalCars: number;
}
