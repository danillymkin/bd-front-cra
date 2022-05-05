import React, { FunctionComponent, useState } from 'react';

import classes from './CarsScreen.module.scss';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import CarsList from '../../widgets/CarsList/CarsList';
import Pagination from '../../widgets/Pagination/Pagination';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useEffectOnce } from 'usehooks-ts';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { fetchAllCars } from '../../../store/cars/carsSlice';
import Loader from '../../ui/Loader/Loader';
import SearchCar from '../../widgets/SearchCar/SearchCar';
import Drawer from '../../ui/Drawer/Drawer';
import Filter from '../../widgets/Filter/Filter';

interface CarsScreenProps {
}

type Props = CarsScreenProps;

const CarsScreen: FunctionComponent<Props> = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { cars, totalCars, loading } = useTypedSelector(state => state.cars);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffectOnce(() => {
    dispatch(fetchAllCars());
  });

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <DashboardLayout pageTitle='Автомобили'>
      <SearchCar onShowFilter={toggleDrawer} />

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

        <Drawer
          isOpen={drawerOpen}
          onClose={toggleDrawer}
          position={'right'}
          className={classes.drawer}
        >
          <Filter className={classes.filter} />
        </Drawer>
      </div>
    </DashboardLayout>
  );
};

export default CarsScreen;
