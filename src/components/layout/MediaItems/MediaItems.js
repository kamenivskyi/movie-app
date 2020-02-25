import React from 'react';
import MediaItem from '../MediaItem';

const MediaItems = ({ items, type }) => {
  if (items && type) {
    return (
      <>
        {items.map(data => {
          return (
            <MediaItem data={data} key={`${type}${data.id}`} type={type} />
          );
        })}
      </>
    );
  }
  return null;
};

export default MediaItems;
