import React, { FunctionComponent, useState } from 'react';

import classes from './FilterVolume.module.scss';
import Input from '../../Input/Input';

const FilterVolume: FunctionComponent = (): JSX.Element => {
  const [volumeFrom, setVolumeFrom] = useState<string>('');
  const [volumeTo, setVolumeTo] = useState<string>('');

  const onChangeVolumeFrom = (value: string): void => {
    setVolumeFrom(value);
  };

  const onChangeVolumeTo = (value: string): void => {
    setVolumeTo(value);
  };

  return (
    <div className={classes.filter}>
      <Input
        value={volumeFrom}
        type={'number'}
        width={'full'}
        onChange={onChangeVolumeFrom}
        min={0}
        placeholder='Объем, от'
      />

      <Input
        value={volumeTo}
        type={'number'}
        width={'full'}
        onChange={onChangeVolumeTo}
        min={0}
        placeholder='Объем, до'
      />
    </div>
  );
};

export default FilterVolume;
