import React, { FunctionComponent } from 'react';

import classes from './FilterYear.module.scss';
import { useYearsFilter } from '../../../../hooks/useYearsFilter';
import Select from '../../Select/Select';

const MIN_FROM_YEAR = 1970;

const FilterYear: FunctionComponent = (): JSX.Element => {
  const {
    yearFrom,
    yearTo,
    options,
    getValue,
    onChangeYearFrom,
    onChangeYearTo,
  } = useYearsFilter(MIN_FROM_YEAR);

  // noinspection RequiredAttributes
  return (
    <div className={classes.filter}>
      <Select
        value={getValue(yearFrom)}
        placeholder='Год, от'
        // @ts-ignore
        onChange={onChangeYearFrom}
        isClearable
        options={options}
      />

      <Select
        value={getValue(yearTo)}
        placeholder='Год, до'
        // @ts-ignore
        onChange={onChangeYearTo}
        isClearable
        options={options}
      />
    </div>
  );
};

export default FilterYear;
