import React from 'react';
import PropTypes from 'prop-types';

import MediaItem from '../MediaItem';

const MediaItems = ({ items, type = 'movie', simpleRow }) => {
  console.log(items);
  console.log(type);

  if (items && type === 'person') {
    return (
      <section className='grid-container'>
        {items.map(data => (
          <MediaItem data={data} key={`${type}${data.id}`} type={type} />
        ))}
      </section>
    );
  }

  if ((items && type === 'tv') || (items && type === 'movie')) {
    return simpleRow ? (
      <section className='row'>
        {items.map(data => (
          <MediaItem data={data} key={`${type}${data.id}`} type={type} />
        ))}
      </section>
    ) : (
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
