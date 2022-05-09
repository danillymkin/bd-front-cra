import React, { FunctionComponent } from 'react';
import { MdNavigateBefore } from 'react-icons/md';
import classNames from 'classnames/bind';

import classes from './Back.module.scss';
import { useNavigate } from 'react-router-dom';

interface BackProps {
  className?: string;
}

type Props = BackProps;

const cx = classNames.bind(classes);

const Back: FunctionComponent<Props> = ({ className = '' }): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      className={cx({
        back: true,
        [className]: className,
      })}
      onClick={() => {
        navigate(-1);
      }}
    >
      <MdNavigateBefore size={18} />
    </div>
  );
};

export default Back;