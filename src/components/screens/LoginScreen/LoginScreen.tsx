import React, { FunctionComponent } from 'react';

import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import SignIn from '../../widgets/SignIn/SignIn';

const LoginScreen: FunctionComponent = (): JSX.Element => {
  return (
    <AuthLayout>
      <SignIn />
    </AuthLayout>
  );
};

export default LoginScreen;
