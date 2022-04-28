import React, { FunctionComponent } from 'react';

import classes from './HeaderUser.module.scss';
import { User } from '../../../services/auth/models/user';
import Avatar from '../Avatar/Avatar';

interface HeaderUserProps {
  user: User;
}

type Props = HeaderUserProps;

const HeaderUser: FunctionComponent<Props> = ({ user }): JSX.Element => {
  return (
    <div className={classes.wrap}>
      <span className={classes.name}>
        {user.firstName} {user.lastName}
      </span>

      <Avatar user={user} />
    </div>
  );
};

export default HeaderUser;
