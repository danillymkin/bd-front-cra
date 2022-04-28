import React, { FunctionComponent, useRef } from 'react';

import classes from './CarGallery.module.scss';
import CarGallerySlider from '../CarGallerySlider/CarGallerySlider';
import CarGalleryHeader from '../CarGalleryHeader/CarGalleryHeader';
import Modal from '../../ui/Modal/Modal';
import { Photo } from '../../../services/photo/models/photo';

interface CarGalleryProps {
  photos: Photo[];
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

type Props = CarGalleryProps;

const CarGallery: FunctionComponent<Props> = ({
                                                photos,
                                                visible,
                                                setVisible,
                                              }): JSX.Element => {
  const paginationRef = useRef<HTMLDivElement>(null);

  const onClickClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal visible={visible} setVisible={setVisible}>
        <div className={classes.gallery}>
          <CarGalleryHeader
            onClose={onClickClose}
            paginationRef={paginationRef}
          />

          <div className={classes.slider}>
            <CarGallerySlider photos={photos} paginationRef={paginationRef} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CarGallery;
