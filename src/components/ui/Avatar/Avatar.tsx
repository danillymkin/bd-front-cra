import React, { FunctionComponent } from 'react';

import classes from './Avatar.module.scss';
import { User } from '../../../services/auth/models/user';

interface AvatarProps {
  user: User;
}

type Props = AvatarProps;

const Avatar: FunctionComponent<Props> = ({ user }): JSX.Element => {
  return (
    <div className={classes.avatar}>
      {user.firstName.charAt(0)}
      {user.lastName.charAt(0)}
    </div>
  );
};

export default Avatar;
