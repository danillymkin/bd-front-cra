import React, { FunctionComponent } from 'react';
import FilterCheck from '../FilterCheck/FilterCheck';

interface MultiSelectCheckboxesProps {
  options: Array<{ label: string; value: string }>;
  values: string[];
  onChange: (values: string[]) => void;
}

type Props = MultiSelectCheckboxesProps;

const MultiSelectCheckboxes: FunctionComponent<Props> = ({
                                                           options,
                                                           values,
                                                           onChange,
                                                         }): JSX.Element => {
  const onChangeCheckbox = (value: string, checked: boolean) => {
    if (checked) {
      onChange([...values, value]);
    } else {
      onChange(values.filter((item) => item !== value));
    }
  };

  return (
    <>
      {options.map(({ label, value }) => {
        return (
          <FilterCheck
            key={value}
            value={value}
            checked={values.includes(value)}
            onChange={onChangeCheckbox}
          >
            {label}
          </FilterCheck>
        );
      })}
    </>
  );
};

export default MultiSelectCheckboxes;
