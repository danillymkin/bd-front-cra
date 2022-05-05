import React, { FunctionComponent } from 'react';

import classes from './SearchCar.module.scss';
import Search from '../Search/Search';
import SearchMore from '../SearchMore/SearchMore';

interface SearchCarProps {
  onShowFilter: () => void;
}

type Props = SearchCarProps;

const SearchCar: FunctionComponent<Props> = ({ onShowFilter }): JSX.Element => {
  return (
    <div className={classes.searchCar}>
      <Search />

      <SearchMore onShowFilter={onShowFilter} />
    </div>
  );
};

export default SearchCar;