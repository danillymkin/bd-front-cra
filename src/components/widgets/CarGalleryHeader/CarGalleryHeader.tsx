import React, { FunctionComponent } from 'react';
import { FaTimes } from 'react-icons/fa';

import classes from './CarGalleryHeader.module.scss';

interface CarGalleryHeaderProps {
  paginationRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}

type Props = CarGalleryHeaderProps;

const CarGalleryHeader: FunctionComponent<Props> = ({
                                                      onClose,
                                                      paginationRef,
                                                    }): JSX.Element => {
  return (
    <header className={classes.header}>
      <div className={classes.fraction} ref={paginationRef} />

      <button onClick={onClose} className={classes.close}>
        <FaTimes width={18} />
        Закрыть
      </button>
    </header>
  );
};

export default CarGalleryHeader;
