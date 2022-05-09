import React, { FunctionComponent, ReactNode } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import classNames from 'classnames/bind';

import classes from './DashboardLayout.module.scss';
import Sidebar from '../../widgets/Sidebar/Sidebar';
import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';

interface DashboardLayoutProps {
  pageTitle: string;
  children: ReactNode;
  showHeader?: boolean;
}

type Props = DashboardLayoutProps;

const cx = classNames.bind(classes);

const DashboardLayout: FunctionComponent<Props> = ({
                                                     pageTitle,
                                                     children,
                                                     showHeader = true,
                                                   }): JSX.Element => {
  const matchesSm = useMediaQuery('(min-width: 640px)');

  return (
    <div className={classes.layout}>
      <Sidebar />

      <main className={classes.main}>
        {showHeader && <Header pageTitle={pageTitle} isMobile={!matchesSm} />}

        <div className={cx({
          content: true,
          contentWithHeader: showHeader,
        })}>
          {children}
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default DashboardLayout;
