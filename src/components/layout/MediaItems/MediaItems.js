import React from 'react';
import PropTypes from 'prop-types';

import MediaItem from '../MediaItem';

const MediaItems = ({ items, type = 'movie', simpleRow }) => {
  console.log(items);

  const renderMediaItems = items && items.map((data) => (
      <MediaItem data={data} key={`${type}${data.id}`} type={type} />
    ));

  if (items && type === 'person') {
    return <section className='grid-container'>{renderMediaItems}</section>;
  }

  return simpleRow ? (
    <section className='row'>{renderMediaItems}</section>
  ) : (
    <>{renderMediaItems}</>
  );
};

MediaItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string,
};
export default MediaItems;
