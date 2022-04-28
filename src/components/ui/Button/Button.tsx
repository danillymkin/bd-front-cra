import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

import classes from './Button.module.scss';
import classNames from 'classnames/bind';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'pagination';
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
    disabled: disabled,
    pagination: variant === 'pagination',
    widthFull: width === 'full',
    small: size === 's',
    medium: size === 'm',
    [className]: className,
  });

  const leftIconClasses = cx({
    icon: true,
    iconLeft: true,
  });

  const rightIconClasses = cx({
    icon: true,
    iconRight: true,
  });

  return (
    <button className={buttonClasses} {...props}>
      {leftIcon && <div className={leftIconClasses}>{leftIcon}</div>}
      {children}
      {rightIcon && <div className={rightIconClasses}>{rightIcon}</div>}
    </button>
  );
};

export default Button;
