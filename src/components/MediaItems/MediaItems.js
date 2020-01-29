import React from 'react';
import MovieItemsView from './MovieItemsView';
import TvItemsView from './TvItemsView';

const MediaItems = ({ items, type }) => {
  // console.log(items);
  if (items) {
    switch (type) {
      case 'movie':
        return <MovieItemsView array={items} key={Math.random()} type={type} />;
      case 'tv':
        return <TvItemsView array={items} key={Math.random()} type={type} />;
      default:
        return <MovieItemsView array={items} key={Math.random()} type={type} />;
    }
  }
  return <>{null}</>;
};

export default MediaItems;
