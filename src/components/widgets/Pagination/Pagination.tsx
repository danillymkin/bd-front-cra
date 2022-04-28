import React, { FunctionComponent } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import classes from './Pagination.module.scss';
import { DOTS, usePagination } from '../../../hooks/usePagination';
import Button from '../../ui/Button/Button';
import classNames from 'classnames/bind';

interface PaginationProps {
  currentPage: number;
  total: number;
  pageSize?: number;
  siblingCount?: number;
  onChange?: (page: number) => void;
  className?: string;
}

type Props = PaginationProps;

const cx = classNames.bind(classes);

const Pagination: FunctionComponent<Props> = ({
                                                total,
                                                currentPage,
                                                onChange,
                                                pageSize = 10,
                                                siblingCount = 1,
                                                className = '',
                                              }): JSX.Element | null => {
  const paginationRange = usePagination({
    total,
    currentPage,
    pageSize,
    siblingCount,
  });

  if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (onChange) {
      onChange(currentPage + 1);
    }
  };

  const onPrev = () => {
    if (onChange) {
      onChange(currentPage - 1);
    }
  };

  const onItem = (pageNumber: number) => {
    if (onChange) {
      onChange(pageNumber);
    }
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={cx({ pagination: true, [className]: className })}>
      <li onClick={onPrev}>
        <Button
          variant={'pagination'}
          className={cx({ disabled: currentPage === 1 })}
        >
          <FaAngleLeft />
        </Button>
      </li>

      {paginationRange.map((pageNumber: number, index: number) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className={classes.dots}>
              &#8230;
            </li>
          );
        }

        return (
          <li key={index} onClick={() => onItem(pageNumber)}>
            <Button
              variant={'pagination'}
              className={cx({
                current: currentPage === pageNumber,
              })}
            >
              {pageNumber}
            </Button>
          </li>
        );
      })}

      <li onClick={onNext}>
        <Button
          variant={'pagination'}
          className={cx({ disabled: currentPage === lastPage })}
        >
          <FaAngleRight />
        </Button>
      </li>
    </ul>
  );
};

export default Pagination;
