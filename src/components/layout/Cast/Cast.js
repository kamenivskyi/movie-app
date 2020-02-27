import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import CastItem from '../CastItem/CastItem';

import { multipleItems } from '../../../utils/sliderSettings';

import './Cast.css';

const Cast = ({ data }) => {
  console.log(data);
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

Cast.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default React.memo(Cast);
