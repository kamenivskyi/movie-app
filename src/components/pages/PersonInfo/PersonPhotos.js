import React from 'react';
import SliderWrapper from '../../common/SliderWrapper';
import { multipleItems } from '../../../utils/sliderSettings';
import Slider from 'react-slick';

const PersonPhotos = ({ data }) => {
  console.log(data);

  return (
    <Slider {...multipleItems}>
      {data.map(item => (
        <img
          src={`https://image.tmdb.org/t/p/w300${item.file_path}`}
          alt='photo'
          key={item.file_path}
        />
      ))}
    </Slider>
  );
};
export default PersonPhotos;
