import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

import classes from './Loader.module.scss';

interface LoaderProps {
}

type Props = LoaderProps;

const loaderTransition = {
  repeat: Infinity,
  duration: 1,
};

const Loader: FunctionComponent<Props> = (): JSX.Element => {
  return (
    <div className={classes.loaderContainer}>
      <motion.span className={classes.loader} animate={{ rotate: 360 }} transition={loaderTransition} />
    </div>
  );
};

export default Loader;