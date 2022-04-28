import React, { FunctionComponent, useState } from 'react';

import classes from '../FilterPower/FilterPower.module.scss';
import Input from '../../Input/Input';

const FilterMileage: FunctionComponent = (): JSX.Element => {
  const [mileageFrom, setMileageFrom] = useState<string>('');
  const [mileageTo, setMileageTo] = useState<string>('');

  const onChangeMileageFrom = (value: string): void => {
    setMileageFrom(value);
  };

  const onChangeMileageTo = (value: string): void => {
    setMileageTo(value);
  };

  return (
    <div className={classes.filter}>
      <Input
        value={mileageFrom}
        type={'number'}
        width={'full'}
        onChange={onChangeMileageFrom}
        min={0}
        placeholder='Пробег, от'
      />

      <Input
        value={mileageTo}
        type={'number'}
        width={'full'}
        onChange={onChangeMileageTo}
        min={0}
        placeholder='Пробег, до'
      />
    </div>
  );
};

export default FilterMileage;
