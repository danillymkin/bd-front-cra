import React, { FunctionComponent, useState } from 'react';

import MultiSelectCheckboxes from '../../MultiSelectCheckboxes/MultiSelectCheckboxes';

const FilterColor: FunctionComponent = (): JSX.Element => {
  const [color, setColor] = useState<string[]>([]);

  const onChange = (values: string[]): void => {
    setColor(values);
  };

  return (
    <MultiSelectCheckboxes
      options={[
        { label: 'Черный', value: '1' },
        { label: 'Белый', value: '2' },
        { label: 'Желтный', value: '3' },
        { label: 'Красный', value: '4' },
      ]}
      values={color}
      onChange={onChange}
    />
  );
};

export default FilterColor;
