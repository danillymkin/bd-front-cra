import React, { FunctionComponent } from 'react';

import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import classes from './CarScreen.module.scss';
import CarPhotos from '../../widgets/CarPhotos/CarPhotos';
import CarDetails from '../../widgets/CarDetails/CarDetails';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { useEffectOnce } from 'usehooks-ts';
import { fetchCarById } from '../../../store/cars/carsSlice';
import { useParams } from 'react-router-dom';
import Loader from '../../ui/Loader/Loader';

const CarScreen: FunctionComponent = (): JSX.Element => {
  const { id } = useParams();
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
    <DashboardLayout pageTitle={car.name}>
      <div className={classes.content}>
        <CarPhotos photos={car.images} />

        <CarDetails car={car} />
      </div>
    </DashboardLayout>
  );
};

export default CarScreen;
