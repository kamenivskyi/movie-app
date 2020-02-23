import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import config from '../../../utils/config';

import reserveAvatar from '../../../assets/images/avatar.jpg';

const Cast = ({ data }) => {
  if (!data) return null;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
    // <ul className='cast'>
    <Slider {...settings}>
      {data.map(actor => {
        const { character, name, profile_path, id } = actor;
        const imageUrl = profile_path
          ? config.API_IMAGE.medium + profile_path
          : reserveAvatar;

        return (
          <li className='cast-item' key={Math.random()}>
            <img src={imageUrl} alt={name} />
            <Link to={`/person/${id}`} className='character'>
              {character}
            </Link>
            <h5 className='name'>{name}</h5>
          </li>
        );
      })}
    </Slider>
    // </ul>
  );
};
export default Cast;
