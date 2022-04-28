import React, { FunctionComponent } from 'react';

import classes from './FormErrors.module.scss';

interface FormErrorsProps {
  error: string[];
}

type Props = FormErrorsProps;

const FormErrors: FunctionComponent<Props> = ({ error }): JSX.Element => {
  return (
    <div className={classes.wrap}>
      {error.map((error, index) => (
        <span key={index} className={classes.error}>
          {error}
        </span>
      ))}
    </div>
  );
};

export default FormErrors;
