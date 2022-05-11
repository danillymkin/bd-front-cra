import React, { FunctionComponent, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Navigation, Pagination, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import classes from './CarGallerySlider.module.scss';
import { Photo } from '../../../services/photo/models/photo';
import { STATIC_URL } from '../../../http';

interface CarGallerySliderProps {
  photos: Photo[];
  paginationRef: React.RefObject<HTMLDivElement>;
}

type Props = CarGallerySliderProps;

const cx = classNames.bind(classes);

const CarGallerySlider: FunctionComponent<Props> = ({
                                                      photos,
                                                      paginationRef,
                                                    }): JSX.Element => {
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const [disabledControl, setDisabledControl] = useState<'prev' | 'next' | null>('prev');

  return (
    <>
      <button
        className={cx({
          control: true,
          prev: true,
          disable: disabledControl === 'prev',
        })}
        ref={prevRef}
      >
        <FaArrowLeft height={18} />
      </button>

      <Swiper
        modules={[Navigation, Pagination, EffectCreative]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSlideChange={(swiper) => {
          if (swiper.isBeginning) {
            setDisabledControl('prev');
          }
          if (swiper.isEnd) {
            setDisabledControl('next');
          }
          if (!swiper.isBeginning && !swiper.isEnd) {
            setDisabledControl(null);
          }
        }}
        pagination={{
          type: 'fraction',
          el: paginationRef.current,
          currentClass: classes.current,
        }}
        grabCursor={true}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        className={classes.swiper}
      >
        {photos.map((photo: Photo) => (
          <SwiperSlide key={photo.id} className={classes.slide}>
            <div className={classes.imageWrapper}>
              <img
                src={`${STATIC_URL}/${photo.fileName}`}
                alt={'Фото'}
                className={classes.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className={cx({
          control: true,
          next: true,
          disable: disabledControl === 'next',
        })}
        ref={nextRef}
      >
        <FaArrowRight height={18} />
      </button>
    </>
  );
};

export default CarGallerySlider;
