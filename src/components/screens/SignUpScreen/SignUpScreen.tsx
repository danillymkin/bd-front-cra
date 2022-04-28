import React, { FunctionComponent } from 'react';

import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import SignUp from '../../widgets/SignUp/SignUp';

const SignUpScreen: FunctionComponent = (): JSX.Element => {
  return (
    <AuthLayout>
      <SignUp />
    </AuthLayout>
  );
};

export default SignUpScreen;
