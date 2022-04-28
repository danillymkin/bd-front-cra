import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import classNames from 'classnames/bind';

import classes from './FormikInput.module.scss';

interface FormikInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>,
    'size' | 'onChange' | 'value' | 'name'> {
  name: string;
  label?: string;
  size?: 'm' | 'xl';
  width?: 'default' | 'full';
  icon?: JSX.Element;
}

type Props = FormikInputProps;

const cx = classNames.bind(classes);

const FormikInput: FunctionComponent<Props> = ({
                                                 size = 'm',
                                                 className = '',
                                                 width = 'default',
                                                 label,
                                                 icon,
                                                 name,
                                                 ...props
                                               }): JSX.Element => {
  const [field, meta] = useField(name);

  const inputClasses = cx({
    input: true,
    widthFull: width === 'full',
    withLabel: label,
    medium: size === 'm',
    extraLarge: size === 'xl',
    withIcon: icon,
    [className]: className,
  });

  return (
    <div className={classes.wrap}>
      {label && <label className={classes.label}>{label}</label>}

      <input className={inputClasses} {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className={classes.error}>{meta.error}</div>
      ) : null}

      {icon && <div className={classes.icon}>{icon}</div>}
    </div>
  );
};

export default FormikInput;
