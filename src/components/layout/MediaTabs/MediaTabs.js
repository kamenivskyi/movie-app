import React from 'react';
import PropTypes from 'prop-types';

const MediaTabs = ({ onClick, type, period, items, periodItems }) => {
  const getClassByType = value => {
    return `nav-link ${type === value ? 'active' : ''}`;
  };

  const getClassByPeriod = value => {
    return `nav-link ${period === value ? 'active' : ''}`;
  };

  return (
    <div className='row mb-3'>
      <ul className='col-md-6 nav nav-pills'>
        {items.map(({ label, type }) => {
          return (
            <li className='nav-item' key={type}>
              <a
                className={getClassByType(type)}
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
      <ul className='col-md-6 nav nav-pills'>
        {periodItems.map(({ label, period }) => {
          return (
            <li className='nav-item' key={period}>
              <a
                className={getClassByPeriod(period)}
                href='#'
                data-period={period}
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
    { label: 'Movies', type: 'movie' },
    { label: 'Tv', type: 'tv' }
  ],
  periodItems: [
    { label: 'Week', period: 'week' },
    { label: 'Day', period: 'day' }
  ]
};

MediaTabs.propTypes = {
  items: PropTypes.array.isRequired,
  periodItems: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default MediaTabs;
