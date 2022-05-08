import React, { FunctionComponent } from 'react';

import classes from './CarDetails.module.scss';
import CarManufacturer from '../../ui/CarManufacturer/CarManufacturer';
import CarSpecifications from '../CarSpecifications/CarSpecifications';

import { STATIC_URL } from '../../../http';
import { MANUFACTURERS_ROUTE } from '../../../constants/routes';
import { Car } from '../../../services/car/models/car';
import { priceFormatter } from '../../../helpers/priceFormatter';
import { Link } from 'react-router-dom';

interface CarDetailsProps {
  car: Car;
}

type Props = CarDetailsProps;

const CarDetails: FunctionComponent<Props> = ({ car }): JSX.Element => {
  return (
    <div className={classes.layout}>
      <section className={classes.content}>
        <h2 className={classes.title}>What Is the 2021 BMW 2 Series?</h2>

        <p className={classes.text}>
          The coupe and convertible come in 230i and M240i form. The 230i is
          powered by a 248-horsepower, turbocharged 2.0-liter four-cylinder
          engine, while the M240i gets a 335-hp, turbocharged 3.0-liter
          inline-six. Both versions are offered with rear- or all-wheel drive
          and an eight-speed automatic or six-speed manual transmission.
        </p>

        <p className={classes.text}>
          The Gran Coupe is powered by a turbocharged 2.0-liter four-cylinder
          that makes 228 hp in the 228i and 301 hp in the M235i. The Gran Coupe
          has standard all-wheel drive and an eight-speed automatic
          transmission.
        </p>

        <CarSpecifications car={car} />
      </section>

      <aside className={classes.aside}>
        <span className={classes.price}>
          {priceFormatter.format(car.price)}

          <div className={classes.manufacturer}>
            <span className={classes.manufacturerDescription}>
              Производитель
            </span>

            <Link to={`${MANUFACTURERS_ROUTE}/${car.manufacturer.id}`}>
              <CarManufacturer
                logo={`${STATIC_URL}/${car.manufacturer.logo}`}
                name={car.manufacturer.name}
                address={car.manufacturer.address}
              />
            </Link>
          </div>
        </span>
      </aside>
    </div>
  );
};

export default CarDetails;
