import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const MediaTabs = ({ onClick, type, period, items, periodItems }) => {
  return (
    <div className='row my-3' style={{ margin: '0' }}>
      <ul className='col-6 nav nav-pills'>
        {items.map(({ label, tabSlug }) => {
          return (
            <li className='nav-item' key={tabSlug}>
              <a
                className={classNames('nav-link', {
                  active: tabSlug === type
                })}
                data-type={tabSlug}
                href='#'
                onClick={onClick}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className='col-6 nav nav-pills justify-content-center'>
        {periodItems.map(({ label, tabPeriod }) => {
          return (
            <li className='nav-item' key={tabPeriod}>
              <a
                className={`nav-link ${tabPeriod === period && 'active'}`}
                data-period={tabPeriod}
                href='#'
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
    { label: 'Movies', tabSlug: 'movie' },
    { label: 'Tvs', tabSlug: 'tv' },
    { label: 'People', tabSlug: 'person' }
  ],
  periodItems: [
    { label: 'Week', tabPeriod: 'week' },
    { label: 'Day', tabPeriod: 'day' }
  ]
};

MediaTabs.propTypes = {
  items: PropTypes.array.isRequired,
  periodItems: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default MediaTabs;
