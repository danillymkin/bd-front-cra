import React, { FunctionComponent } from 'react';
import { FaGoogle, FaTwitter, FaFacebookF } from 'react-icons/fa';

import classes from './SignInSocial.module.scss';
import Button from '../../ui/Button/Button';

const SignInSocial: FunctionComponent = (): JSX.Element => {
  return (
    <div className={classes.wrap}>
      <Button
        leftIcon={<FaGoogle size={16} />}
        size={'m'}
        className={classes.button}
      >
        Войти с помощью Google
      </Button>

      <Button
        leftIcon={<FaFacebookF size={16} />}
        size={'m'}
        className={classes.button}
      >
        Войти с помощью Facebook
      </Button>

      <Button
        leftIcon={<FaTwitter size={16} />}
        size={'m'}
        className={classes.button}
      >
        Войти с помощью Twitter
      </Button>
    </div>
  );
};

export default SignInSocial;
