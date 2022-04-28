import React, { FunctionComponent } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Button from '../../ui/Button/Button';
import AuthSeparator from '../../ui/AuthSeparator/AuthSeparator';
import SignInSocial from '../SignInSocial/SignInSocial';

interface SignUpChoiceProps {
  onNext: () => void;
}

type Props = SignUpChoiceProps;

const SignUpChoice: FunctionComponent<Props> = ({ onNext }): JSX.Element => {
  return (
    <>
      <Button
        variant={'primary'}
        width={'full'}
        size={'m'}
        rightIcon={<FaArrowRight />}
        onClick={onNext}
      >
        Регистрация с помощью E-Mail
      </Button>

      <AuthSeparator />

      <SignInSocial />
    </>
  );
};

export default SignUpChoice;
