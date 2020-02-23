import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import BannerContext from '../../../context/banner/bannerContext';
import config from '../../../config';

import './Banner.css';

const Banner = () => {
  const { items, getTrending } = useContext(BannerContext);

  useEffect(() => {
    getTrending('movie', 'week');
  }, []);

  const { original } = config.API_IMAGE;

  if (!items.results) return null;

  return (
    <Flip left>
      <Carousel autoPlay showStatus={false} showIndicators={false}>
        {items.results.map(item => {
          const { title, backdrop_path, overview, id } = item;

          return (
            <div className='banner-item' key={`banner${Math.random()}`}>
              <img src={`${original}${backdrop_path}`} alt={title} />
              <div className='banner-content'>
                <Link to={`movie/${id}`} className='banner-link'>
                  {title.substr(0, 30)} {title.length >= 30 && '..'}
                </Link>

                <div className='banner-description'>
                  {overview.substr(0, 150)} {overview.length >= 150 && '...'}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </Flip>
  );
};
export default Banner;
