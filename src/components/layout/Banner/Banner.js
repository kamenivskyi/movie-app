import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import Slider from 'react-slick';

import { getBannerMovies } from '../../../redux/banner/bannerActions';

import config from '../../../utils/config';
import { cutString } from '../../../utils/helpers';
import { singleItem } from '../../../utils/sliderSettings';

import './Banner.css';

const Banner = ({ items, getBannerMovies }) => {
  useEffect(() => {
    getBannerMovies('movie', 'week', 1);
  }, []);

  const { original } = config.API_IMAGE;

  if (!items) return null;

  return (
    <Flip left>
      <Slider {...singleItem}>
        {items.map(item => {
          const { title, backdrop_path, overview, id } = item;

          return (
            <div className='banner-item' key={`banner${Math.random()}`}>
              <img src={`${original}${backdrop_path}`} alt={title} />
              <div className='banner-content'>
                <Link to={`movie/${id}`} className='banner-link'>
                  {cutString(title, 0, 30)}
                </Link>

                <div className='banner-description'>
                  {cutString(overview, 0, 140)}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </Flip>
  );
};

const mapStateToProps = state => ({
  items: state.banner.bannerItems
});

export default connect(mapStateToProps, { getBannerMovies })(Banner);
