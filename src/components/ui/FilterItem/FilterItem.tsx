import React, { FunctionComponent, useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import classNames from 'classnames/bind';

import classes from './FilterItem.module.scss';

interface FilterItemProps {
  name: string;
  children: React.ReactNode;
}

type Props = FilterItemProps;

const cx = classNames.bind(classes);

const FilterItem: FunctionComponent<Props> = ({
                                                name,
                                                children,
                                              }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.filterItem}>
      <div className={classes.header} onClick={onOpen}>
        <span className={classes.name}>{name}</span>

        <div className={cx({ open: true, active: !open })}>
          {open ? <FaMinusCircle /> : <FaPlusCircle />}
        </div>
      </div>

      {open && <div className={classes.content}>{children}</div>}
    </div>
  );
};

export default FilterItem;
