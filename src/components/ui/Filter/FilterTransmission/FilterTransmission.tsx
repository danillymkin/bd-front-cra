import React, { FunctionComponent, useState } from 'react';

import MultiSelectCheckboxes from '../../MultiSelectCheckboxes/MultiSelectCheckboxes';

const FilterTransmission: FunctionComponent = (): JSX.Element => {
  const [transmission, setTransmission] = useState<string[]>([]);

  const onChange = (values: string[]): void => {
    setTransmission(values);
  };

  return (
    <MultiSelectCheckboxes
      options={[
        { label: 'Автоматическая', value: '1' },
        { label: 'Механическая', value: '2' },
      ]}
      values={transmission}
      onChange={onChange}
    />
  );
};

export default FilterTransmission;
