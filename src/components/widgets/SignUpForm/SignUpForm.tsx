import React, { FunctionComponent } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FaCheckCircle, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

import classes from './SignUpForm.module.scss';
import Button from '../../ui/Button/Button';
import FormikInput from '../../ui/FormikInput/FormikInput';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { register } from '../../../store/auth/authSlice';

interface SignUpFormProps {
  onNext: () => void;
}

type Props = SignUpFormProps;

interface SignUpFormValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirm: string;
}

const SignUpForm: FunctionComponent<Props> = ({ onNext }): JSX.Element => {
  const dispatch = useTypedDispatch();
  const initialFormValues: SignUpFormValues = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirm: '',
  };

  return (
    <Formik
      initialValues={initialFormValues}
      isInitialValid={false}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Некорректный E-mail')
          .required('Обязательное поле'),
        firstName: Yup.string()
          .max(15, 'Не более 15 символов')
          .required('Обязательное поле'),
        lastName: Yup.string()
          .max(20, 'Не более 15 символов')
          .required('Обязательное поле'),
        password: Yup.string()
          .min(6, 'Не менее 6 символов')
          .required('Обязательное поле'),
        confirm: Yup.string()
          .min(6, 'Не менее 6 символов')
          .oneOf([Yup.ref('password')], 'Пароли не совпадают')
          .required('Обязательное поле'),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        const { confirm, ...registerDto } = values;
        dispatch(register(registerDto));
        onNext();
      }}
    >
      {({ isValid, isSubmitting }) => (
        <Form className={classes.form}>
          <div className={classes.fullWidth}>
            <FormikInput
              name={'email'}
              type={'email'}
              size={'xl'}
              width={'full'}
              placeholder={'Ваш E-Mail'}
              label={'E-Mail'}
              icon={<FaEnvelope />}
            />
          </div>

          <div>
            <FormikInput
              name={'firstName'}
              type={'text'}
              size={'xl'}
              width={'full'}
              placeholder={'Ваше имя'}
              label={'Имя'}
              icon={<FaUser />}
            />
          </div>

          <div>
            <FormikInput
              name={'lastName'}
              type={'text'}
              size={'xl'}
              width={'full'}
              placeholder={'Ваша фамилия'}
              label={'Фамилия'}
              icon={<FaUser />}
            />
          </div>

          <div className={classes.fullWidth}>
            <FormikInput
              name={'password'}
              type={'password'}
              size={'xl'}
              width={'full'}
              placeholder={'Ваш пароль'}
              label={'Пароль'}
              icon={<FaLock />}
            />
          </div>

          <div className={classes.fullWidth}>
            <FormikInput
              name={'confirm'}
              type={'password'}
              size={'xl'}
              width={'full'}
              placeholder={'Ваш пароль'}
              label={'Подтвердите пароль'}
              icon={<FaCheckCircle />}
            />
          </div>

          <Button
            disabled={!isValid || isSubmitting}
            type={'submit'}
            className={classes.button}
            size={'m'}
            width={'full'}
            variant={'primary'}
          >
            Зарегистрироваться
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
