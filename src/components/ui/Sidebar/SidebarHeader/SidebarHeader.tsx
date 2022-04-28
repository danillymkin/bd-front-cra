import React, { FunctionComponent } from 'react';

import classes from './SidebarHeader.module.scss';
import logo from '../../../../assets/logo.svg';

const SidebarHeader: FunctionComponent = (): JSX.Element => {
  return (
    <header className={classes.header}>
      <img src={logo} alt='Логотип' />
      <span className={classes.name}>Car Dealer</span>
    </header>
  );
};

export default SidebarHeader;
