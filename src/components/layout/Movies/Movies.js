import React, { useContext, useEffect } from 'react';
import MediaItem from '../../MediaItem';
import MovieContext from '../../../context/movie/movieContext';

const Movies = () => {
  const { movies } = useContext(MovieContext);
  const { results, total_results } = movies;

  return <MediaItem items={results} type='movie' />;
};
export default Movies;
