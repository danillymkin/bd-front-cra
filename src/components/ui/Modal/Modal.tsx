import React, { FunctionComponent, MouseEvent } from 'react';

import classes from './Modal.module.scss';
import classNames from 'classnames/bind';

interface ModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

type Props = ModalProps;

const cx = classNames.bind(classes);

const Modal: FunctionComponent<Props> = ({
                                           setVisible,
                                           children,
                                           visible,
                                         }): JSX.Element => {
  const onClickContainer = () => {
    setVisible(false);
  };

  const onClickContent = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const containerClasses = cx({
    container: true,
    active: visible,
  });

  return (
    <div onClick={onClickContainer} className={containerClasses}>
      <div onClick={onClickContent} className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
