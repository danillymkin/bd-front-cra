import React, { FunctionComponent } from 'react';

import classes from './CarsScreen.module.scss';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import CarsList from '../../widgets/CarsList/CarsList';
import Pagination from '../../widgets/Pagination/Pagination';
import Filter from '../../widgets/Filter/Filter';
import Search from '../../widgets/Search/Search';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useEffectOnce } from 'usehooks-ts';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { fetchAllCars } from '../../../store/cars/carsSlice';
import Loader from '../../ui/Loader/Loader';

interface CarsScreenProps {
}

type Props = CarsScreenProps;

const CarsScreen: FunctionComponent<Props> = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { cars, totalCars, loading } = useTypedSelector(state => state.cars);

  useEffectOnce(() => {
    dispatch(fetchAllCars());
  });

  return (
    <DashboardLayout pageTitle='Автомобили'>
      <div className={classes.search}>
        <Search />
      </div>

      <div className={classes.layout}>
        <div className={classes.content}>
          {loading ? (
            <div className={classes.loader}>
              <Loader />
            </div>
          ) : (
            <CarsList cars={cars} />
          )}

          <Pagination
            total={totalCars}
            pageSize={10}
            currentPage={1}
            className={classes.pagination}
          />
        </div>

        <Filter />
      </div>
    </DashboardLayout>
  );
};

export default CarsScreen;
