import { Manufacturer } from '../../manufacturer/models/manufacturer';
import { Photo } from '../../photo/models/photo';

export interface Car {
  id: number;
  name: string;
  images: Photo[];
  price: number;
  description?: string;
  releaseYear: number;
  mileage: number;
  body: string;
  color: string;
  tax: number;
  transmission: string;
  drive: string;
  fuel: string;
  power: number;
  volume: number;
  manufacturer: Manufacturer;
}
