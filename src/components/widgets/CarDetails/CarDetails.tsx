import React, { FunctionComponent } from 'react';
import { MdDirectionsCar, MdLocalGasStation, MdOutlineAirlineSeatReclineNormal } from 'react-icons/md';
import { useMediaQuery } from 'usehooks-ts';
import { Link } from 'react-router-dom';

import classes from './CarDetails.module.scss';
import CarManufacturer from '../../ui/CarManufacturer/CarManufacturer';
import CarSpecifications from '../CarSpecifications/CarSpecifications';
import BuyCar from '../BuyCar/BuyCar';
import Feature from '../Feature/Feature';
import { STATIC_URL } from '../../../http';
import { MANUFACTURERS_ROUTE } from '../../../constants/routes';
import { priceFormatter } from '../../../helpers/priceFormatter';
import { Car } from '../../../services/car/models/car';
import Button from '../../ui/Button/Button';

interface CarDetailsProps {
  car: Car;
}

type Props = CarDetailsProps;

const CarDetails: FunctionComponent<Props> = ({ car }): JSX.Element => {
  const matchesSmh = useMediaQuery('(min-width: 870px)');
  const formattedPrice = priceFormatter.format(car.price);

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
        {matchesSmh && <span className={classes.price}>{formattedPrice}</span>}

        <div className={classes.manufacturer}>
          <span className={classes.description}>
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

        <div className={classes.features}>
          <span className={classes.description}>
            Особенности
          </span>

          <div className={classes.featuresList}>
            <Feature icon={<MdDirectionsCar size={18} />} text={car.body} />
            <Feature icon={<MdOutlineAirlineSeatReclineNormal size={18} />} text={'5 мест'} />
            <Feature icon={<MdLocalGasStation size={18} />} text={'60 литров'} />
          </div>
        </div>

        <Button className={classes.buyBtn} variant={'primary'} size={'m'}>
          Добавить в корзину
        </Button>
      </aside>

      {!matchesSmh && <BuyCar price={formattedPrice} />}
    </div>
  );
};

export default CarDetails;
