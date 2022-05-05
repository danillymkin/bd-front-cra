import React, { FunctionComponent } from 'react';
import { FaFilter } from 'react-icons/fa';
import classNames from 'classnames/bind';

import classes from './Filter.module.scss';
import Button from '../../ui/Button/Button';
import FilterBrand from '../../ui/Filter/FilterBrand/FilterBrand';
import FilterYear from '../../ui/Filter/FilterYear/FilterYear';
import FilterBody from '../../ui/Filter/FilterBody/FilterBody';
import FilterEngine from '../../ui/Filter/FilterEngine/FilterEngine';
import FilterTransmission from '../../ui/Filter/FilterTransmission/FilterTransmission';
import FilterDrive from '../../ui/Filter/FilterDrive/FilterDrive';
import FilterPower from '../../ui/Filter/FilterPower/FilterPower';
import FilterVolume from '../../ui/Filter/FilterVolume/FilterVolume';
import FilterMileage from '../../ui/Filter/FilterMileage/FilterMileage';
import FilterColor from '../../ui/Filter/FilterColor/FilterColor';
import FilterPrice from '../../ui/Filter/FilterPrice/FilterPrice';
import FilterItem from '../../ui/FilterItem/FilterItem';

interface FilterProps {
  className?: string;
}

type Props = FilterProps

const cx = classNames.bind(classes);

const Filter: FunctionComponent<Props> = ({ className = '' }): JSX.Element => {
  const filterClasses = cx({
    filter: true,
    [className]: className,
  });

  return (
    <aside className={filterClasses}>
      <div className={classes.header}>
        <FaFilter />

        <span>Фильтры</span>
      </div>

      <div>
        <FilterItem name='Марка'>
          <FilterBrand />
        </FilterItem>

        <FilterItem name='Год выпуска'>
          <FilterYear />
        </FilterItem>

        <FilterItem name='Кузов'>
          <FilterBody />
        </FilterItem>

        <FilterItem name='Двигатель'>
          <FilterEngine />
        </FilterItem>

        <FilterItem name='Коробка'>
          <FilterTransmission />
        </FilterItem>

        <FilterItem name='Привод'>
          <FilterDrive />
        </FilterItem>

        <FilterItem name='Мощность'>
          <FilterPower />
        </FilterItem>

        <FilterItem name='Объем'>
          <FilterVolume />
        </FilterItem>

        <FilterItem name='Пробег'>
          <FilterMileage />
        </FilterItem>

        <FilterItem name='Цвет'>
          <FilterColor />
        </FilterItem>

        <FilterItem name='Цена'>
          <FilterPrice />
        </FilterItem>
      </div>

      <Button variant={'primary'} size={'m'} className={classes.apply}>
        Применить
      </Button>
    </aside>
  );
};

export default Filter;
