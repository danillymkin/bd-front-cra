import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import classes from './SignUpSuccess.module.scss';
import success from '../../../assets/signUpSuccess.svg';
import Button from '../../ui/Button/Button';
import { MAIN_ROUTE } from '../../../constants/routes';

const SignUpSuccess: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <img src={success} alt={'Успех'} className={classes.img} />

      <div className={classes.textContent}>
        <h2 className={classes.title}>Спасибо!</h2>

        <p className={classes.text}>
          Ваш аккаунт успешно зарегистрирован.
          <br /> Мы отправили письмо на mail@gmail.com для подверждения
          регистрации.
        </p>
      </div>

      <Link to={MAIN_ROUTE}>
        <Button variant={'primary'} width={'full'} size={'m'}>
          Перейти на сайт
        </Button>
      </Link>
    </>
  );
};

export default SignUpSuccess;
