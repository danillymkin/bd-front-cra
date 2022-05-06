import React, { FunctionComponent } from 'react';
import { FaFilter } from 'react-icons/fa';

import classes from './SearchMore.module.scss';
import Button from '../../ui/Button/Button';
import { useMediaQuery } from 'usehooks-ts';

interface SearchMoreProps {
  onShowFilter: () => void;
}

type Props = SearchMoreProps;

const SearchMore: FunctionComponent<Props> = ({ onShowFilter }): JSX.Element => {
  const matchesSm = useMediaQuery('(min-width: 640px)');

  return (
    <div className={classes.more}>
      <div className={classes.moreButtons}>
        <Button
          size={matchesSm ? 'm' : 's'}
          variant={'ghost'}
        >
          Новые
        </Button>

        <Button
          size={matchesSm ? 'm' : 's'}
          variant={'ghost'}
        >
          Б/У
        </Button>
      </div>

      <Button
        variant={'ghost'}
        onClick={onShowFilter}
        size={matchesSm ? 'm' : 's'}
        leftIcon={<FaFilter />}
      >
        Все фильтры
      </Button>
    </div>
  );
};

export default SearchMore;