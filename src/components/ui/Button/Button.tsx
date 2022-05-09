import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import classNames from 'classnames/bind';

import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'pagination' | 'ghost';
  className?: string;
  width?: 'default' | 'full';
  size?: 's' | 'm';
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

type Props = ButtonProps;

const cx = classNames.bind(classes);

const Button: FunctionComponent<Props> = ({
                                            children,
                                            className = '',
                                            variant = 'default',
                                            type = 'button',
                                            width = 'default',
                                            size = 's',
                                            leftIcon,
                                            rightIcon,
                                            disabled,
                                            ...props
                                          }): JSX.Element => {
  const buttonClasses = cx({
    button: true,
    primary: variant === 'primary',
    default: variant === 'default',
    pagination: variant === 'pagination',
    ghost: variant === 'ghost',
    disabled: disabled,
    widthFull: width === 'full',
    small: size === 's',
    medium: size === 'm',
    withIcon: leftIcon || rightIcon,
    [className]: className,
  });

  return (
    <button className={buttonClasses} {...props}>
      {leftIcon && <div>{leftIcon}</div>}
      {children}
      {rightIcon && <div>{rightIcon}</div>}
    </button>
  );
};

export default Button;
