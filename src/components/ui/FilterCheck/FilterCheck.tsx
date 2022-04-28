import React, { FunctionComponent, ReactNode, useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';

import classes from './FilterCheck.module.scss';
import classNames from 'classnames/bind';
import { useUpdateEffect } from 'usehooks-ts';

interface FilterCheckProps {
  value: string;
  onChange: (value: string, checked: boolean) => void;
  checked: boolean;
  children: ReactNode;
}

type Props = FilterCheckProps;

const cx = classNames.bind(classes);

const FilterCheck: FunctionComponent<Props> = ({
                                                 value,
                                                 onChange,
                                                 checked,
                                                 children,
                                               }): JSX.Element => {
  const [isChecked, setIsChecked] = useState(checked);

  const onChecked = () => {
    setIsChecked(!isChecked);
  };

  useUpdateEffect(() => {
    onChange(value, isChecked);
  }, [isChecked]);

  return (
    <div onClick={onChecked} className={classes.filterCheck}>
      <CheckBox checked={checked} />

      <span className={cx({ text: true, active: checked })}>{children}</span>
    </div>
  );
};

export default FilterCheck;
