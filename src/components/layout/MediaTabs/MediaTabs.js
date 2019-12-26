import React from 'react';
import PropTypes from 'prop-types';

const MediaTabs = ({ onClick, type, items }) => {
  const getClass = value => {
    return `nav-link ${type === value ? 'active' : ''}`;
  };

  return (
    <div className='col-12 mb-3'>
      <ul className='nav nav-pills'>
        {items.map(({ label, type }) => {
          return (
            <li className='nav-item' key={type}>
              <a
                className={getClass(type)}
                href='#'
                data-type={type}
                onClick={onClick}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MediaTabs.defaultProps = {
  items: [
    {
      label: 'Movies',
      type: 'movie'
    },
    {
      label: 'Tv',
      type: 'tv'
    }
  ]
};

MediaTabs.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default MediaTabs;
