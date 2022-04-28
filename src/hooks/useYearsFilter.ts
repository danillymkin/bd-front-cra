import { OnChangeValue, Options } from 'react-select';
import { THIS_YEAR } from '../constants/dates';
import { useState } from 'react';
import { useUpdateEffect } from 'usehooks-ts';

interface Option {
  value: string;
  label: string;
}

export const useYearsFilter = (from: number) => {
  const initOptions: Options<Option> = Array.from(
    new Array(THIS_YEAR - from + 1),
    (_, index) => {
      const year = THIS_YEAR - index;
      return { value: `${year}`, label: `${year}` };
    },
  );

  const [yearFrom, setYearFrom] = useState<string>('');
  const [yearTo, setYearTo] = useState<string>('');
  const [options, setOptions] = useState<Options<Option>>(initOptions);

  const onChangeYearFrom = (newValue: OnChangeValue<Option, boolean>): void => {
    setYearFrom((newValue as Option)?.value || '');
  };

  const onChangeYearTo = (newValue: OnChangeValue<Option, boolean>): void => {
    setYearTo((newValue as Option)?.value || '');
  };

  useUpdateEffect(() => {
    if (yearFrom && !yearTo) {
      setOptions(
        options.slice(
          0,
          options.findIndex((option) => option.value === yearFrom) + 1,
        ),
      );
    }

    if (!yearFrom && yearTo) {
      setOptions(
        options.slice(
          options.findIndex((option) => option.value === yearTo),
          -1,
        ),
      );
    }

    if (!yearFrom && !yearTo) {
      setOptions(initOptions);
    }
  }, [yearFrom, yearTo]);

  const getValue = (year: string) => {
    return year ? options.find((option: Option) => option.value === year) : '';
  };

  return {
    yearFrom,
    yearTo,
    options,
    getValue,
    onChangeYearFrom,
    onChangeYearTo,
  };
};
