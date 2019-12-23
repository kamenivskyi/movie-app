import React, { useContext } from 'react';
import MovieItem from './MovieItem';
import MovieContext from '../context/movie/movieContext';

const Movies = () => {
  const movieContext = useContext(MovieContext);

  return (
    <>
      <MovieItem movies={movieContext.movies.results} />
    </>
  );
};
export default Movies;
