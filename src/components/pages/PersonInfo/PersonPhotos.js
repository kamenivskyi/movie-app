import React from 'react';
import SliderWrapper from '../../common/SliderWrapper';
import Slider from 'react-slick';

const PersonPhotos = ({ data }) => {
  console.log(data);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
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
