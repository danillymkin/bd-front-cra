import React, { FunctionComponent, useState } from 'react';

import MultiSelectCheckboxes from '../../MultiSelectCheckboxes/MultiSelectCheckboxes';

const FilterBrand: FunctionComponent = (): JSX.Element => {
  const [brands, setBrands] = useState<string[]>([]);

  const onChange = (values: string[]): void => {
    setBrands(values);
  };

  return (
    <MultiSelectCheckboxes
      options={[
        { label: 'Subaru', value: '1' },
        { label: 'BMW', value: '2' },
        { label: 'Mercedes-Benz', value: '3' },
        { label: 'Volkswagen', value: '4' },
      ]}
      values={brands}
      onChange={onChange}
    />
  );
};

export default FilterBrand;
