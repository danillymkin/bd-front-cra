import React, { FunctionComponent, useState } from 'react';

import MultiSelectCheckboxes from '../../MultiSelectCheckboxes/MultiSelectCheckboxes';

const FilterDrive: FunctionComponent = (): JSX.Element => {
  const [drive, setDrive] = useState<string[]>([]);

  const onChange = (values: string[]): void => {
    setDrive(values);
  };

  return (
    <MultiSelectCheckboxes
      options={[
        { label: 'Полный', value: '1' },
        { label: 'Задний', value: '2' },
        { label: 'Передний', value: '3' },
      ]}
      values={drive}
      onChange={onChange}
    />
  );
};

export default FilterDrive;
