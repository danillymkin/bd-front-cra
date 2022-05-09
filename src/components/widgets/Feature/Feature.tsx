import React, { FunctionComponent } from 'react';

import classes from './Feature.module.scss';

interface FeatureProps {
  icon: JSX.Element;
  text: string;
}

type Props = FeatureProps;

const Feature: FunctionComponent<Props> = ({ icon, text }): JSX.Element => {

  return (
    <div className={classes.feature}>
      <div className={classes.icon}>
        {icon}
      </div>

      <span className={classes.text}>
        {text}
      </span>
    </div>
  );
};

export default Feature;