import React from 'react';
import PropTypes from 'prop-types';

import config from '../../../utils/config';

import './StudioItem.css';

const StudioItem = ({ item: { logo_path, name } }) => (
  <li className='studio-item'>
    {logo_path ? (
      <div className='company-img-wrapper'>
        <img
          src={config.API_IMAGE.little + logo_path}
          alt={name}
          title={name}
        />
      </div>
    ) : (
      <span className='company-name'>{name}</span>
    )}
  </li>
);

StudioItem.propTypes = {
  item: PropTypes.shape({
    logo_path: PropTypes.string,
    name: PropTypes.string
  })
};

export default StudioItem;
