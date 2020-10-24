import React from 'react';
import PropTypes from 'prop-types';

import StudioItem from '../StudioItem';

const Networks = ({ data }) => {
  if (!data) return null;

  const renderNetworks = data.map((item) => (
    <StudioItem item={item} key={`network${item.id}`} />
  ));

  return (
    <>
      <h4 className='section-title text-black'>Networks</h4>
      <ul className='companies'>{renderNetworks}</ul>
    </>
  );
};

Networks.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo_path: PropTypes.string,
    })
  ),
};

export default Networks;
