import React, {
  ChangeEvent,
  FunctionComponent,
  InputHTMLAttributes,
  useRef,
  useState,
} from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { useUpdateEffect } from 'usehooks-ts';
import classNames from 'classnames/bind';

import classes from './Input.module.scss';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>,
    'size' | 'onChange' | 'value'> {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  size?: 'm' | 'xl';
  width?: 'default' | 'full';
  clearable?: boolean;
  icon?: JSX.Element;
}

type Props = InputProps;

const cx = classNames.bind(classes);

const Input: FunctionComponent<Props> = ({
                                           value,
                                           onChange,
                                           className = '',
                                           width = 'default',
                                           size = 'm',
                                           label = '',
                                           clearable,
                                           icon,
                                           ...props
                                         }): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue('');
    inputRef?.current?.focus();
  };

  useUpdateEffect(() => {
    if (onChange) {
      onChange(inputValue);
    }
  }, [inputValue]);

  const inputClasses = cx({
    input: true,
    widthFull: width === 'full',
    withLabel: label?.length > 0,
    medium: size === 'm',
    extraLarge: size === 'xl',
    withIcon: icon,
    [className]: className,
  });

  return (
    <div className={classes.wrap}>
      {label && <label className={classes.label}>{label}</label>}

      <input
        ref={inputRef}
        className={inputClasses}
        value={inputValue}
        onChange={handleChange}
        {...props}
      />

      {icon && !clearable && <div className={classes.icon}>{icon}</div>}

      {clearable && inputValue && (
        <div className={classes.clear} onClick={clearInput}>
          <FaTimesCircle size={18} />
        </div>
      )}
    </div>
  );
};

export default Input;
