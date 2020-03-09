import React from 'react';
import PropTypes from 'prop-types';

import MediaItem from '../MediaItem';

const MediaItems = ({ items, type = 'movie' }) => {
  if (items && type) {
    return (
      <>
        {items.map(data => (
          <MediaItem data={data} key={`${type}${data.id}`} type={type} />
        ))}
      </>
    );
  }
  return null;
};

MediaItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string
};
export default MediaItems;
