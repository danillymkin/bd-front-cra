import React, { FunctionComponent } from 'react';
import { PublicBaseSelectProps } from 'react-select/base';
import { GroupBase, Theme } from 'react-select';
import { default as ReactSelect } from 'react-select';

import classes from './Select.module.scss';

export interface Option {
  value: string;
  label: string;
}

interface Group extends GroupBase<Option> {
}

interface SelectProps
  extends PublicBaseSelectProps<Option | string | undefined, boolean, Group> {
}

type Props = SelectProps;

const Select: FunctionComponent<Props> = (props): JSX.Element => {
  return (
    <ReactSelect
      {...props}
      className={classes.select}
      theme={(theme: Theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          neutral80: '#9A9EA7',
          primary: '#7963F0',
          primary25: '#F5F6F7',
          primary50: '#E4E6E8',
        },
      })}
    />
  );
};

export default Select;
