import React, { FunctionComponent } from 'react';

import classes from './BuyCar.module.scss';
import Button from '../../ui/Button/Button';

interface BuyCarProps {
  price: string;
}

type Props = BuyCarProps;

const BuyCar: FunctionComponent<Props> = ({ price }): JSX.Element => {

  return (
    <div className={classes.buy}>
      <span className={classes.price}>
        {price}
      </span>

      <Button variant={'primary'} size={'m'} width={'full'}>
        Добавить в корзину
      </Button>
    </div>
  );
};

export default BuyCar;