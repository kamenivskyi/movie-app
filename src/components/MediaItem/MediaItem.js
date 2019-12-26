import React from 'react';
import MovieItemView from './MovieItemView';
import TvItemView from './TvItemView';

const MediaItem = ({ items, type }) => {
  if (items) {
    switch (type) {
      case 'movie':
        return <MovieItemView array={items} key={Math.random()} type={type} />;
      case 'tv':
        return <TvItemView array={items} key={Math.random()} type={type} />;
      default:
        return <MovieItemView array={items} key={Math.random()} type={type} />;
    }
  }
  return <>{null}</>;
};

export default MediaItem;
