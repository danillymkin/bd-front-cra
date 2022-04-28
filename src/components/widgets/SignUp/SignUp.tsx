import React, { FunctionComponent, useState } from 'react';

import classes from './SignUp.module.scss';
import AuthHeader from '../../ui/AuthHeader/AuthHeader';
import Success from '../SignUpSuccess/SignUpSuccess';
import AuthFooter from '../../ui/AuthFooter/AuthFooter';
import SignUpForm from '../SignUpForm/SignUpForm';
import SignUpChoice from '../SignUpChoice/SignUpChoice';

type SignUpPage = 'choice' | 'personal' | 'success';

const SignUp: FunctionComponent = (): JSX.Element => {
  const [page, setPage] = useState<SignUpPage>('choice');

  return (
    <div className={classes.signUp}>
      <AuthHeader
        onPrev={page === 'personal' ? () => setPage('choice') : undefined}
        variant={'signUp'}
      />

      <div className={classes.content}>
        {page === 'choice' && (
          <SignUpChoice onNext={() => setPage('personal')} />
        )}

        {page === 'personal' && (
          <SignUpForm onNext={() => setPage('success')} />
        )}

        {page === 'success' && <Success />}
      </div>

      {page === 'choice' && <AuthFooter variant={'signUp'} />}
    </div>
  );
};

export default SignUp;
