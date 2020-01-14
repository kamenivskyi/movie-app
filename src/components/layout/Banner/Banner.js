import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import MovieContext from '../../../context/movie/movieContext';
import config from '../../../config';
import './Banner.css';

const Banner = () => {
  const { bannerMovies, getTrending } = useContext(MovieContext);

  useEffect(() => {
    getTrending('movie', 'week');
  }, []);

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 7000,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const { original } = config.API_IMAGE;

  return (
    <Slider {...settings}>
      {bannerMovies.results &&
        bannerMovies.results.map(item => {
          const { title, backdrop_path, overview, id } = item;
          return (
            <div className='banner-item' key={Math.random()}>
              <div className='container-fluid'>
                <img src={`${original}${backdrop_path}`} alt={title} />
                <Link to={`movie/${id}`} className='banner-link'>
                  {title}
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
