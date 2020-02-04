import React from 'react';
import MediaItem from '../layout/MediaItem/MediaItem';

const MediaItems = ({ items, type }) => {
  console.log(items);
  if (items) {
    return (
      <>
        {items &&
          items.map(data => {
            return (
              <MediaItem data={data} key={`${type}${data.id}`} type={type} />
            );
          })}
      </>
    );
  }
  return <>{null}</>;
};

export default MediaItems;
