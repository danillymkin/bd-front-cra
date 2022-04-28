import React, { FunctionComponent } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';

const HomeScreen: FunctionComponent = (): JSX.Element => {
  return (
    <DashboardLayout pageTitle='Главная'>
      <div>Content</div>
    </DashboardLayout>
  );
};

export default HomeScreen;
