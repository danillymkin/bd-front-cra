import React, { FunctionComponent, ReactNode } from 'react';

import classes from './AuthLayout.module.scss';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FunctionComponent<AuthLayoutProps> = ({ children }): JSX.Element => {
  return <div className={classes.layout}>{children}</div>;
};

export default AuthLayout;
