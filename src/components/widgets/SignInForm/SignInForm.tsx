import React, { FunctionComponent } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useUpdateEffect } from 'usehooks-ts';
import { useNavigate } from 'react-router-dom';

import classes from './SignInForm.module.scss';
import Button from '../../ui/Button/Button';
import FormikInput from '../../ui/FormikInput/FormikInput';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { login } from '../../../store/auth/authSlice';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import FormErrors from '../../ui/FormErrors/FormErrors';
import { ACCESS_TOKEN_KEY } from '../../../constants/localStorage';

interface SignInFormValues {
  email: string;
  password: string;
}

const SignInForm: FunctionComponent = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const { error, accessToken } = useTypedSelector((state) => state.auth);

  const initialFormValues: SignInFormValues = {
    email: '',
    password: '',
  };

  useUpdateEffect(() => {
    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      navigate('/', { replace: true });
    }
  }, [accessToken]);

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Некорректный E-mail')
          .required('Обязательное поле'),
        password: Yup.string()
          .min(6, 'Не менее 6 символов')
          .required('Обязательное поле'),
      })}
      onSubmit={(values) => {
        dispatch(login(values));
      }}
    >
      {({ isValid, isSubmitting }) => (
        <Form className={classes.form}>
          <FormikInput
            name={'email'}
            type={'email'}
            size={'xl'}
            width={'full'}
            placeholder={'Ваш E-Mail'}
            label={'E-Mail'}
            icon={<FaEnvelope />}
          />

          <FormikInput
            name={'password'}
            type={'password'}
            size={'xl'}
            width={'full'}
            placeholder={'Ваш пароль'}
            label={'Пароль'}
          />

          {error?.messages && <FormErrors error={error.messages} />}

          <Button
            disabled={!isValid || isSubmitting}
            type={'submit'}
            className={classes.button}
            size={'m'}
            width={'full'}
            variant={'primary'}
          >
            Войти
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
