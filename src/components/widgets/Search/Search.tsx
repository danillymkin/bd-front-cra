import React, { FunctionComponent, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import classes from './Search.module.scss';
import Input from '../../ui/Input/Input';

const Search: FunctionComponent = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');

  const onChange = (value: string): void => {
    setSearchValue(value);
  };

  return (
    <div className={classes.wrapper}>
      <button className={classes.button}>
        <AiOutlineSearch />
      </button>

      <Input
        type='text'
        value={searchValue}
        onChange={onChange}
        className={classes.input}
        placeholder='Например, Toyota Camry'
      />
    </div>
  );
};

export default Search;
