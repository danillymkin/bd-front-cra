import { Car } from '../../car/models/car';

export interface Manufacturer {
  id: number;
  name: string;
  logo: string;
  address: string;
  director: string;
  accountant: string;
  account: string;
  bic: string;
  cars?: Car[];
}
