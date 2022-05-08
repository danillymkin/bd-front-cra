import React, { FunctionComponent } from 'react';

import classes from './CarManufacturer.module.scss';

interface CarManufacturerProps {
  logo: string;
  name: string;
  address: string;
}

type Props = CarManufacturerProps;

const CarManufacturer: FunctionComponent<Props> = ({
                                                     logo,
                                                     name,
                                                     address,
                                                   }): JSX.Element => {
  return (
    <div className={classes.manufacturer}>
      <div className={classes.logo}>
        <img src={logo} alt='logo' width={24} height={24} />
      </div>

      <div className={classes.info}>
        <span className={classes.name}>{name}</span>
        <span className={classes.address}>{address}</span>
      </div>
    </div>
  );
};

export default CarManufacturer;
