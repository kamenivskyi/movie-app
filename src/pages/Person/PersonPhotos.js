import React from "react";
import Slider from "react-slick";

import MovieService from "../../services/movie-service";
import { sliderSettings } from "../../utils/config";

const PersonPhotos = ({ data }) => {
  const { getPersonPhotoUrl } = new MovieService();
  return (
    <Slider {...sliderSettings.multipleItems}>
      {data.map(({ file_path }) => (
        <img src={getPersonPhotoUrl(file_path)} alt="" key={file_path} />
      ))}
    </Slider>
  );
};
export default PersonPhotos;
