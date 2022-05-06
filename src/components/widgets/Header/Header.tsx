import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.scss';
import { LOGIN_ROUTE } from '../../../constants/routes';
import HeaderUser from '../../ui/HeaderUser/HeaderUser';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

interface HeaderProps {
  pageTitle: string;
  isMobile?: boolean;
}

type Props = HeaderProps;

const Header: FunctionComponent<Props> = ({ pageTitle, isMobile = false }): JSX.Element => {
  const { user } = useTypedSelector((state) => state.auth);

  return (
    <header className={classes.header}>
      <h1 className={classes.pageTitle}>{pageTitle}</h1>

      {!isMobile && (
        <div>
          {user ? (
            <HeaderUser user={user} />
          ) : (
            <Link to={LOGIN_ROUTE} className={classes.login}>
              Войти
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
