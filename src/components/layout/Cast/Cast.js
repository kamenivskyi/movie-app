import React from 'react';
import Slider from 'react-slick';

import CastItem from '../CastItem/CastItem';

import { multipleItems } from '../../../utils/sliderSettings';

import './Cast.css';

const Cast = ({ data }) => {
  if (!data) return null;

  return (
    <section className='cast'>
      <h3 className='section-title'>Cast</h3>
      <Slider {...multipleItems}>
        {data.map(item => (
          <CastItem item={item} key={item.id} />
        ))}
      </Slider>
    </section>
  );
};
export default Cast;
