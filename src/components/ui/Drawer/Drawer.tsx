import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames/bind';

import classes from './Drawer.module.scss';

interface DrawerProps {
  isOpen: boolean;
  className?: string;
  onClose: () => void;
  position: 'left' | 'right' | 'bottom';
  children?: ReactNode;
}

type Props = DrawerProps;

const cx = classNames.bind(classes);

const Drawer: FunctionComponent<Props> = ({
                                            isOpen,
                                            onClose,
                                            children,
                                            className = '',
                                            position = 'right',
                                          }): JSX.Element => {
  const drawerClasses = cx({
    drawer: true,
    open: isOpen,
    [position]: position,
    [className]: className,
  });

  const backdropClasses = cx({
    backdrop: true,
    backdropOpen: isOpen,
  });

  return (
    <div>
      <div
        className={drawerClasses}
        role={'dialog'}
      >
        {children}
      </div>

      <div className={backdropClasses} onClick={onClose} />
    </div>
  );
};

export default Drawer;