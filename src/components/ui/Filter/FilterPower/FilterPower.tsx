import React, { FunctionComponent, useState } from 'react';

import classes from './FilterPower.module.scss';
import Input from '../../Input/Input';

const FilterPower: FunctionComponent = (): JSX.Element => {
  const [powerFrom, setPowerFrom] = useState<string>('');
  const [powerTo, setPowerTo] = useState<string>('');

  const onChangePowerFrom = (value: string): void => {
    setPowerFrom(value);
  };

  const onChangePowerTo = (value: string): void => {
    setPowerTo(value);
  };

  return (
    <div className={classes.filter}>
      <Input
        value={powerFrom}
        type={'number'}
        width={'full'}
        onChange={onChangePowerFrom}
        min={0}
        placeholder='Мощность, от'
      />

      <Input
        value={powerTo}
        type={'number'}
        width={'full'}
        onChange={onChangePowerTo}
        min={0}
        placeholder='Мощность, до'
      />
    </div>
  );
};

export default FilterPower;
