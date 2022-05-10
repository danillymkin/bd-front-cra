import React, { FunctionComponent } from 'react';

import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import classes from './CarScreen.module.scss';
import CarPhotos from '../../widgets/CarPhotos/CarPhotos';
import CarDetails from '../../widgets/CarDetails/CarDetails';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { useEffectOnce, useMediaQuery } from 'usehooks-ts';
import { fetchCarById } from '../../../store/cars/carsSlice';
import { useParams } from 'react-router-dom';
import Loader from '../../ui/Loader/Loader';
import Back from '../../ui/Back/Back';

const CarScreen: FunctionComponent = (): JSX.Element => {
  const { id } = useParams();
  const matchesSm = useMediaQuery('(min-width: 640px)');
  const dispatch = useTypedDispatch();
  const { cars } = useTypedSelector(state => state.cars);
  const [car] = cars;

  useEffectOnce(() => {
    if (id && +id) {
      dispatch(fetchCarById(+id));
    }
  });

  if (!car) {
    return <Loader />;
  }

  return (
    <DashboardLayout pageTitle={car.name} showHeader={matchesSm} resetSafeArea={!matchesSm}>
      <div className={classes.content}>
        {!matchesSm && <Back className={classes.back} />}

        <CarPhotos photos={car.images} />

        <CarDetails car={car} />
      </div>
    </DashboardLayout>
  );
};

export default CarScreen;
