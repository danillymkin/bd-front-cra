import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';

import classes from './AuthSeparator.module.scss';

interface AuthSeparatorProps {
  className?: string;
}

type Props = AuthSeparatorProps;

const cx = classNames.bind(classes);

const AuthSeparator: FunctionComponent<Props> = ({
                                                   className = '',
                                                 }): JSX.Element => {
  const separatorClasses = cx({
    separator: true,
    [className]: className,
  });

  return (
    <div className={separatorClasses}>
      <hr className={classes.line} />
      <span className={classes.or}>Или</span>
      <hr className={classes.line} />
    </div>
  );
};

export default AuthSeparator;
