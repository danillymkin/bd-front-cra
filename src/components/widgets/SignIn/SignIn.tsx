import React, { FunctionComponent } from 'react';

import classes from './SignIn.module.scss';
import AuthHeader from '../../ui/AuthHeader/AuthHeader';
import AuthFooter from '../../ui/AuthFooter/AuthFooter';
import SignInForm from '../SignInForm/SignInForm';
import AuthSeparator from '../../ui/AuthSeparator/AuthSeparator';
import SignInSocial from '../SignInSocial/SignInSocial';

const SignIn: FunctionComponent = (): JSX.Element => {
  return (
    <div className={classes.signIn}>
      <AuthHeader variant={'signIn'} />

      <div className={classes.content}>
        <SignInForm />

        <AuthSeparator />

        <SignInSocial />
      </div>

      <AuthFooter variant={'signIn'} />
    </div>
  );
};

export default SignIn;
