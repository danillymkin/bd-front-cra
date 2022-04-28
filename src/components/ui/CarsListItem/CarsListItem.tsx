import React, { FunctionComponent } from 'react';

import classes from './CarsListItem.module.scss';
import CarManufacturer from '../CarManufacturer/CarManufacturer';
import CarSpecificationsLine from '../CarSpecificationsLine/CarSpecificationsLine';
import CarPrice from '../CarPrice/CarPrice';
import NoImage from '../NoImage/NoImage';
import { Car } from '../../../services/car/models/car';
import { mileageFormatter } from '../../../helpers/mileageFormatter';
import { CARS_ROUTE, MANUFACTURERS_ROUTE } from '../../../constants/routes';
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
    color,
    drive,
    mileage,
    transmission,
    manufacturer,
    images,
  } = car;
  const specifications: string[] = [
    `${mileageFormatter.format(mileage)} км`,
    color,
    drive,
    transmission,
  ];

  return (
    <div className={classes.car}>
      <Link to={`${CARS_ROUTE}/${id}`} className={classes.image}>
        {images && images[0] ? (
          <img
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

        <div className={classes.specifications}>
          <CarSpecificationsLine specifications={specifications} />
        </div>

        <Link to={`${MANUFACTURERS_ROUTE}/${manufacturer.id}`} className={classes.manufacturer}>
          <CarManufacturer
            logo={`${STATIC_URL}/${manufacturer.logo}`}
            name={manufacturer.name}
          />
        </Link>

        <div className={classes.price}>
          <CarPrice price={price} />
        </div>
      </div>
    </div>
  );
};

export default CarsListItem;
