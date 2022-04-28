import React, { Fragment, FunctionComponent } from 'react';

import classes from './CarSpecificationsLine.module.scss';

interface CarSpecificationsLineProps {
  specifications: string[];
}

type Props = CarSpecificationsLineProps;

const CarSpecificationsLine: FunctionComponent<Props> = ({
                                                           specifications,
                                                         }): JSX.Element => {
  return (
    <div className={classes.specifications}>
      {specifications.map((specification: string, index: number) => {
        return (
          <Fragment key={index}>
            <span>{specification}</span>
            {index !== specifications.length - 1 && (
              <span className={classes.delimiter}>&#183;</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default CarSpecificationsLine;
