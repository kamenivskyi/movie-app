import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';
import MovieContext from '../../../context/movie/movieContext';
import Slider from 'react-slick';
import withSpinner from '../../hoc-helpers/withSpinner';
import './Banner.css';

const Banner = () => {
  const movieContext = useContext(MovieContext);
  const { bannerMovies, getTrending } = movieContext;

  useEffect(() => {
    getTrending();
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
      {bannerMovies &&
        bannerMovies.map(item => {
          const { title, backdrop_path, overview, id } = item;
          return (
            <div className='banner-item' key={id}>
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
