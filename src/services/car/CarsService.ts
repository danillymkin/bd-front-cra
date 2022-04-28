import { AxiosResponse } from 'axios';
import { AllAndCount } from '../../http/types/AllAndCount';
import { Car } from './models/car';
import $api from '../../http';
import { ServerError } from '../../http/types/ServerError';

const CARS_PATH = '/cars';

export default class CarsService {
  static async getAll(): Promise<AxiosResponse<AllAndCount<Car> | ServerError>> {
    return await $api.get<AllAndCount<Car> | ServerError>(CARS_PATH);
  }

  static async getById(
    id: string | number,
  ): Promise<AxiosResponse<Car | ServerError>> {
    return await $api.get<Car>(`${CARS_PATH}/${id}`);
  }
}
