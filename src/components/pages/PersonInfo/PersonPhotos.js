import React from 'react';
import Slider from 'react-slick';

import { multipleItems } from '../../../utils/sliderSettings';
import config from '../../../utils/config';

const PersonPhotos = ({ data }) => {
  console.log(data);

  return (
    <Slider {...multipleItems}>
      {data.map(item => (
        <img
          src={`${config.API_IMAGE.medium}${item.file_path}`}
          alt='photo'
          key={item.file_path}
        />
      ))}
    </Slider>
  );
};
export default PersonPhotos;
