import React, { FunctionComponent } from 'react';

import classes from './Footer.module.scss';

const Footer: FunctionComponent = (): JSX.Element => {
  return (
    <footer className={classes.footer}>
      <span className={classes.copy}>&copy;2022 Cars Dealer</span>
    </footer>
  );
};

export default Footer;
