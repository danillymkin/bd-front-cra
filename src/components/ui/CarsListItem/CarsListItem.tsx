import React, { FunctionComponent } from 'react';

import classes from './CarsListItem.module.scss';
import CarSpecificationsLine from '../CarSpecificationsLine/CarSpecificationsLine';
import CarPrice from '../CarPrice/CarPrice';
import NoImage from '../NoImage/NoImage';
import { Car } from '../../../services/car/models/car';
import { mileageFormatter } from '../../../helpers/mileageFormatter';
import { CARS_ROUTE } from '../../../constants/routes';
import { STATIC_URL } from '../../../http';
import { Link } from 'react-router-dom';

interface CarsListItemProps {
  car: Car;
}

type Props = CarsListItemProps;

const CarsListItem: FunctionComponent<Props> = ({ car }): JSX.Element => {
  const {
    id,
    name,
    price,
    drive,
    mileage,
    transmission,
    images,
  } = car;
  const specifications: string[] = [
    drive,
    transmission,
  ];

  return (
    <div className={classes.car}>
      <Link to={`${CARS_ROUTE}/${id}`} className={classes.imageLink}>
        {images && images[0] ? (
          <img
            className={classes.image}
            src={`${STATIC_URL}/${images[0].fileName}`}
            alt='car'
          />
        ) : (
          <NoImage />
        )}
      </Link>

      <div className={classes.details}>
        <Link to={`${CARS_ROUTE}/${id}`} className={classes.name}>
          {name}
        </Link>

        <span className={classes.mileage}>
          {`${mileageFormatter.format(mileage)} км`}
        </span>

        <div className={classes.specifications}>
          <CarSpecificationsLine specifications={specifications} />
        </div>

        <div className={classes.price}>
          <CarPrice price={price} />
        </div>
      </div>
    </div>
  );
};

export default CarsListItem;
