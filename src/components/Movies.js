import React, { useContext } from 'react';
import MediaItem from './MediaItem';
import MovieContext from '../context/movie/movieContext';

const Movies = () => {
  const movieContext = useContext(MovieContext);

  return (
    <>
      <MediaItem items={movieContext.movies.results} type='movie' />
    </>
  );
};
export default Movies;
