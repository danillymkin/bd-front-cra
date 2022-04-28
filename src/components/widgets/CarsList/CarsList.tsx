import React, { FunctionComponent } from 'react';

import classes from './CarsList.module.scss';
import { Car } from '../../../services/car/models/car';
import CarsListItem from '../../ui/CarsListItem/CarsListItem';
import Empty from '../../ui/Empty/Empty';

interface CarsListProps {
  cars: Car[];
}

type Props = CarsListProps;

const CarsList: FunctionComponent<Props> = ({ cars }): JSX.Element => {
  if (cars.length <= 0) {
    return (
      <div className={classes.notFound}>
        <Empty />
      </div>
    );
  }

  return (
    <div className={classes.list}>
      {cars.map((car: Car) => (
        <CarsListItem key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarsList;
