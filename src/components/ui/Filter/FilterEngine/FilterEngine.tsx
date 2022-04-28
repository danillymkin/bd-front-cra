import React, { FunctionComponent, useState } from 'react';

import MultiSelectCheckboxes from '../../MultiSelectCheckboxes/MultiSelectCheckboxes';

const FilterEngine: FunctionComponent = (): JSX.Element => {
  const [engine, setEngine] = useState<string[]>([]);

  const onChange = (values: string[]): void => {
    setEngine(values);
  };

  return (
    <MultiSelectCheckboxes
      options={[
        { label: 'Дизель', value: '1' },
        { label: 'Бензин', value: '2' },
        { label: 'Электро', value: '3' },
      ]}
      values={engine}
      onChange={onChange}
    />
  );
};

export default FilterEngine;
