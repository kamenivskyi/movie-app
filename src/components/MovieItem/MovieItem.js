import React from 'react';
import MovieItemView from './MovieItemView';
const MovieItem = ({ movies }) => {
  return (
    <>
      {movies &&
        movies.map(data => <MovieItemView data={data} key={data.id} />)}
    </>
  );
};

export default MovieItem;
