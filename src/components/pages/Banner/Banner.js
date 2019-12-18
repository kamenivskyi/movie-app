import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';
import Slider from 'react-slick';
import './Banner.css';

const Banner = ({ data }) => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 7000,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  // const { backdrop_path, poster_path } = data;
  const { original } = config.API_IMAGE;

  return (
    <Slider {...settings}>
      {data &&
        data.map(item => {
          const { name, title, backdrop_path, overview, id } = item;
          return (
            <div className='banner-item' key={id}>
              <div className='container-fluid'>
                <img src={`${original}${backdrop_path}`} alt={name} />
                <Link to={`movie/${id}`} className='banner-link'>
                  {name}
                </Link>
              </div>
              <div className='banner-description'>{overview}</div>
            </div>
          );
        })}
    </Slider>
  );
};
export default Banner;
