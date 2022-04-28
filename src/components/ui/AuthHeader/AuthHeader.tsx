import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

import classes from './AuthHeader.module.scss';
import { MAIN_ROUTE } from '../../../constants/routes';
import { FaArrowLeft } from 'react-icons/fa';

interface AuthHeaderProps {
  onPrev?: () => void;
  variant: 'signIn' | 'signUp';
}

type Props = AuthHeaderProps;

const AuthHeader: FunctionComponent<Props> = ({
                                                variant,
                                                onPrev,
                                              }): JSX.Element => {
  const title = variant === 'signIn' ? 'Войти в аккаунт' : 'Зарегистрироваться';
  const navigate = useNavigate();

  const goHome = async () => {
    await navigate(MAIN_ROUTE);
  };

  return (
    <header className={classes.header}>
      {onPrev && (
        <FaArrowLeft size={18} onClick={onPrev} className={classes.prev} />
      )}

      <span className={classes.title}>{title}</span>

      <IoClose size={25} className={classes.close} onClick={goHome} />
    </header>
  );
};

export default AuthHeader;
