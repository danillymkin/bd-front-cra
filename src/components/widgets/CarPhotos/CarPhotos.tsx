import React, { FunctionComponent, useState } from 'react';
import { FaRegImages } from 'react-icons/fa';

import classes from './CarPhotos.module.scss';
import classNames from 'classnames/bind';
import CarGallery from '../CarGallery/CarGallery';

import { Photo } from '../../../services/photo/models/photo';
import { STATIC_URL } from '../../../http';

const cx = classNames.bind(classes);

interface CarPhotosProps {
  photos: Photo[];
}

type Props = CarPhotosProps;

const CarPhotos: FunctionComponent<Props> = ({
                                               photos,
                                             }): JSX.Element | null => {
  const [galleryVisible, setGalleryVisible] = useState(false);

  const onClickShowAll = () => {
    setGalleryVisible(true);
  };

  if (!photos.length) {
    return null;
  }

  return (
    <>
      <div className={classes.gallery}>
        <div
          className={cx({
            image: true,
            once: photos.length < 3,
          })}
        >
          <img
            src={`${STATIC_URL}/${photos[0].fileName}`}
            alt='car'
          />
        </div>

        {photos.length > 2 && (
          <>
            <div className={classes.image}>
              <img
                src={`${STATIC_URL}/${photos[1].fileName}`}
                alt='car'
              />
            </div>

            <div className={classes.image}>
              <img
                src={`${STATIC_URL}/${photos[2].fileName}`}
                alt={'car'}
              />
            </div>
          </>
        )}

        <button onClick={onClickShowAll} className={classes.showAll}>
          <FaRegImages />
          Показать все
        </button>
      </div>

      <CarGallery
        photos={photos}
        visible={galleryVisible}
        setVisible={setGalleryVisible}
      />
    </>
  );
};

export default CarPhotos;
