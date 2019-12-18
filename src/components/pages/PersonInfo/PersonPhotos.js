import React from 'react';
import SliderWrapper from '../../common/SliderWrapper';

const PersonPhotos = ({ data }) => {
  console.log(data);
  return (
    <SliderWrapper>
      {data.map(item => (
        <img
          src={`https://image.tmdb.org/t/p/w300${item.file_path}`}
          alt='photo'
          key={item.file_path}
        />
      ))}
    </SliderWrapper>
  );
};
export default PersonPhotos;
