import React, { FunctionComponent } from 'react';

import classes from './AuthFooter.module.scss';
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../../../constants/routes';
import { Link } from 'react-router-dom';

interface AuthFooterProps {
  variant: 'signIn' | 'signUp';
}

type Props = AuthFooterProps;

const AuthFooter: FunctionComponent<Props> = ({ variant }): JSX.Element => {
  const text = variant === 'signIn' ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?';
  const linkText = variant === 'signIn' ? 'Зарегистрироваться' : 'Войти';
  const link = variant === 'signIn' ? SIGNUP_ROUTE : LOGIN_ROUTE;

  return (
    <footer className={classes.footer}>
      <span>{text}</span>

      <Link to={link} className={classes.link}>
        {linkText}
      </Link>
    </footer>
  );
};

export default AuthFooter;
