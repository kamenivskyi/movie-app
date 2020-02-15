import React from 'react';
import SliderWrapper from '../../common/SliderWrapper';
import { Carousel } from 'react-responsive-carousel';

const PersonPhotos = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map(item => (
        <img
          src={`https://image.tmdb.org/t/p/w300${item.file_path}`}
          alt='photo'
          key={item.file_path}
        />
      ))}
    </>
  );
};
export default PersonPhotos;
