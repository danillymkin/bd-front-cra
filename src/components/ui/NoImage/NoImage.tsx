import React, { FunctionComponent } from 'react';

import classes from './NoImage.module.scss';

interface NoImageProps {
  text?: string;
}

type Props = NoImageProps;

const NoImage: FunctionComponent<Props> = ({
                                             text = 'Без фото',
                                           }): JSX.Element => {
  return (
    <div className={classes.noImage}>
      <span className={classes.text}>{text}</span>
    </div>
  );
};

export default NoImage;
