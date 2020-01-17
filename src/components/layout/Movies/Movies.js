import React, { useContext } from 'react';
import MediaItem from '../../MediaItem';
import MovieContext from '../../../context/movie/movieContext';
import Spinner from '../../common/Spinner';

const Movies = () => {
  const { movies, loading } = useContext(MovieContext);
  const { results } = movies;
  if (loading) {
    return <Spinner />;
  } else {
    return <MediaItem items={results} type='movie' />;
  }
};
export default Movies;
