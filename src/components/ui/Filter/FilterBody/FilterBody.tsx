import React, { FunctionComponent, useState } from 'react';

import MultiSelectCheckboxes from '../../MultiSelectCheckboxes/MultiSelectCheckboxes';

const FilterBody: FunctionComponent = (): JSX.Element => {
  const [body, setBody] = useState<string[]>([]);

  const onChange = (values: string[]): void => {
    setBody(values);
  };

  return (
    <MultiSelectCheckboxes
      options={[
        { label: 'Седан', value: '1' },
        { label: 'Лифтбек', value: '2' },
        { label: 'Внедорожник', value: '3' },
        { label: 'Купе', value: '4' },
      ]}
      values={body}
      onChange={onChange}
    />
  );
};

export default FilterBody;
