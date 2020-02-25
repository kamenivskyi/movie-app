import React from 'react';
import PropTypes from 'prop-types';

import config from '../../../utils/config';

import './Companies.css';

const Companies = ({ data }) => {
  if (!data) return null;

  const renderCompanies = data.map(({ name, id, logo_path }) => (
    <li key={`network${id}`}>
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
  ));

  return (
    data.length > 0 && (
      <div className='companies-wrapper'>
        <div className='container-fluid'>
          <ul className='companies'>{renderCompanies}</ul>
        </div>
      </div>
    )
  );
};

Companies.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo_path: PropTypes.string
    })
  )
};

export default Companies;
