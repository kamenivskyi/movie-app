import React, { useEffect, useContext } from 'react';
import Flip from 'react-reveal/Flip';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import BannerContext from '../../../context/banner/bannerContext';
import config from '../../../config';
import './Banner.css';

const Banner = () => {
  const { items, getTrending } = useContext(BannerContext);

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
    <Flip left>
      <Slider {...settings}>
        {items.results &&
          items.results.map(item => {
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
    </Flip>
  );
};
export default Banner;
