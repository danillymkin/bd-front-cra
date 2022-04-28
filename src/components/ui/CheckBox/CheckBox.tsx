import React, { FunctionComponent } from 'react';
import { FaCheck } from 'react-icons/fa';

import classes from './CheckBox.module.scss';
import classNames from 'classnames/bind';

interface CheckBoxProps {
  checked?: boolean;
}

type Props = CheckBoxProps;

const cx = classNames.bind(classes);

const CheckBox: FunctionComponent<Props> = ({
                                              checked = false,
                                            }): JSX.Element => {
  return (
    <div className={cx({ checkbox: true, checked })}>
      {checked && <FaCheck />}
    </div>
  );
};

export default CheckBox;
