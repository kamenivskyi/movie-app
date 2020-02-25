import React from 'react';
import PropTypes from 'prop-types';

import config from '../../../utils/config';

import './Networks.css';

const Networks = ({ data }) => {
  if (!data) return null;

  const renderNetworks = data.map(({ id, name, logo_path }) => (
    <li key={`network${id}`}>
      {logo_path ? (
        <img
          src={config.API_IMAGE.little + logo_path}
          alt={name}
          title={name}
        />
      ) : (
        { name }
      )}
    </li>
  ));

  return (
    <div className='network-wrapper'>
      <div className='container'>
        <ul className='networks'>{renderNetworks}</ul>
      </div>
    </div>
  );
};

Networks.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo_path: PropTypes.string
    })
  )
};
export default Networks;
