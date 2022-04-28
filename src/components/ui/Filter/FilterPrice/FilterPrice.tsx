import React, { FunctionComponent, useState } from 'react';

import classes from './FilterPrice.module.scss';
import Input from '../../Input/Input';

const FilterPrice: FunctionComponent = (): JSX.Element => {
  const [priceFrom, setPriceFrom] = useState<string>('');
  const [priceTo, setPriceTo] = useState<string>('');

  const onChangePriceFrom = (value: string): void => {
    setPriceFrom(value);
  };

  const onChangePriceTo = (value: string): void => {
    setPriceTo(value);
  };

  return (
    <div className={classes.filter}>
      <Input
        value={priceFrom}
        type={'number'}
        width={'full'}
        onChange={onChangePriceFrom}
        min={0}
        placeholder='Цена, от'
      />

      <Input
        value={priceTo}
        type={'number'}
        width={'full'}
        onChange={onChangePriceTo}
        min={0}
        placeholder='Цена, до'
      />
    </div>
  );
};

export default FilterPrice;
