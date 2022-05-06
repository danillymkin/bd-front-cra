import React, { FunctionComponent, ReactNode } from 'react';

import classes from './DashboardLayout.module.scss';
import Sidebar from '../../widgets/Sidebar/Sidebar';
import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';
import { useMediaQuery } from 'usehooks-ts';

interface DashboardLayoutProps {
  pageTitle: string;
  children: ReactNode;
}

type Props = DashboardLayoutProps;

const DashboardLayout: FunctionComponent<Props> = ({
                                                     pageTitle,
                                                     children,
                                                   }): JSX.Element => {
  const matchesSm = useMediaQuery('(min-width: 640px)');

  return (
    <div className={classes.layout}>
      <Sidebar />

      <main className={classes.main}>
        <Header pageTitle={pageTitle} isMobile={!matchesSm} />

        <div className={classes.content}>{children}</div>

        <Footer />
      </main>
    </div>
  );
};

export default DashboardLayout;
