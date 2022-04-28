import React, { FunctionComponent } from 'react';

import classes from './CarSpecifications.module.scss';
import { Car } from '../../../services/car/models/car';
import { priceFormatter } from '../../../helpers/priceFormatter';

interface CarSpecificationsProps {
  car: Car;
}

type Props = CarSpecificationsProps;

const CarSpecifications: FunctionComponent<Props> = ({ car }): JSX.Element => {
  return (
    <ul className={classes.list}>
      <li className={classes.item}>
        <span>Год выпуска</span>

        <span className={classes.value}>{car.releaseYear}</span>
      </li>

      <li className={classes.item}>
        <span>Пробег, км</span>

        <span className={classes.value}>{car.mileage}</span>
      </li>

      <li className={classes.item}>
        <span>Кузов</span>

        <span className={classes.value}>{car.body}</span>
      </li>

      <li className={classes.item}>
        <span>Цвет</span>

        <span className={classes.value}>{car.color}</span>
      </li>

      <li className={classes.item}>
        <span>Привод</span>

        <span className={classes.value}>{car.drive}</span>
      </li>

      <li className={classes.item}>
        <span>КПП</span>

        <span className={classes.value}>{car.transmission}</span>
      </li>

      <li className={classes.item}>
        <span>Мощность, лс</span>

        <span className={classes.value}>{car.power}</span>
      </li>

      <li className={classes.item}>
        <span>Объем двигателя, л</span>

        <span className={classes.value}>{car.volume}</span>
      </li>

      <li className={classes.item}>
        <span>Налог</span>

        <span className={classes.value}>{priceFormatter.format(car.tax)}</span>
      </li>
    </ul>
  );
};

export default CarSpecifications;
