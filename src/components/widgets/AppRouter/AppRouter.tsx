import React, { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';

import { CAR_ROUTE, CARS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, SIGNUP_ROUTE } from '../../../constants/routes';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import CarsScreen from '../../screens/CarsScreen/CarsScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen';
import CarScreen from '../../screens/CarScreen/CarScreen';

interface AppRouterProps {
}

type Props = AppRouterProps;

const AppRouter: FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Routes>
      <Route path={MAIN_ROUTE} element={<HomeScreen />} />
      <Route path={CARS_ROUTE} element={<CarsScreen />} />
      <Route path={CAR_ROUTE} element={<CarScreen />} />
      <Route path={LOGIN_ROUTE} element={<LoginScreen />} />
      <Route path={SIGNUP_ROUTE} element={<SignUpScreen />} />
    </Routes>
  );
};

export default AppRouter;