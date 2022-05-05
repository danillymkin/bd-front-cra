import React, { FunctionComponent } from 'react';
import { FaFilter } from 'react-icons/fa';

import classes from './SearchMore.module.scss';
import Button from '../../ui/Button/Button';

interface SearchMoreProps {
  onShowFilter: () => void;
}

type Props = SearchMoreProps;

const SearchMore: FunctionComponent<Props> = ({ onShowFilter }): JSX.Element => {
  return (
    <div className={classes.more}>
      <div className={classes.moreButtons}>
        <Button size={'m'} variant={'ghost'}>Новые</Button>

        <Button variant={'ghost'}>Поддержанные</Button>
      </div>

      <Button variant={'ghost'} onClick={onShowFilter} leftIcon={<FaFilter />}>Все фильтры</Button>
    </div>
  );
};

export default SearchMore;