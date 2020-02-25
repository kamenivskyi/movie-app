import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import Slider from 'react-slick';

import BannerContext from '../../../context/banner/bannerContext';

import config from '../../../utils/config';
import { cutString } from '../../../utils/helpers';
import { singleItem } from '../../../utils/sliderSettings';

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
      <Slider {...singleItem}>
        {items.results.map(item => {
          const { title, backdrop_path, overview, id } = item;

          return (
            <div className='banner-item' key={`banner${Math.random()}`}>
              <img src={`${original}${backdrop_path}`} alt={title} />
              <div className='banner-content'>
                <Link to={`movie/${id}`} className='banner-link'>
                  {cutString(title, 30)}
                </Link>

                <div className='banner-description'>
                  {cutString(overview, 150)}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </Flip>
  );
};
export default Banner;
