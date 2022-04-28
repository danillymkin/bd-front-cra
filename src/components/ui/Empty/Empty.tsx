import React, { FunctionComponent } from 'react';

import notFound from '../../../assets/notFound.svg';
import classes from './Empty.module.scss';

interface EmptyProps {
  title?: string;
  description?: string;
}

type Props = EmptyProps;

const Empty: FunctionComponent<Props> = ({
                                           title = 'Ничего не найдено',
                                           description = 'Пожалуйста попробуйте найти другой автомобиль или применить другие фильтры',
                                         }): JSX.Element => {
  return (
    <div className={classes.empty}>
      <img src={notFound} alt='Not Found' className={classes.icon} />
      <h3 className={classes.title}>{title}</h3>
      <span className={classes.text}>{description}</span>
    </div>
  );
};

export default Empty;
