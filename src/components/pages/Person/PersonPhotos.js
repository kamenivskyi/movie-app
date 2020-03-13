import React from 'react';
import Slider from 'react-slick';

import { multipleItems } from '../../../utils/sliderSettings';
import config from '../../../utils/config';

const PersonPhotos = ({ data }) => {
  console.log(data);

  const getImageUrl = item => `${config.API_IMAGE.medium}${item.file_path}`;

  return (
    <Slider {...multipleItems}>
      {data.map(item => (
        <img src={getImageUrl(item)} alt='' key={item.file_path} />
      ))}
    </Slider>
  );
};
export default PersonPhotos;
