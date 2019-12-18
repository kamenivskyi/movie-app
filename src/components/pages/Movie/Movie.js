import React, { useContext, useEffect } from 'react';
import MovieContext from '../../../context/movie/movieContext';
import MovieView from './MovieView';
import './Movie.css';

const Movie = ({ match }) => {
  const movieContext = useContext(MovieContext);
  const { getMovie, movie, getCast, cast } = movieContext;

  useEffect(() => {
    const { id } = match.params;
    getMovie(id);
    getCast(id);
  }, []);
  return <MovieView movie={movie} cast={cast} />;
};

export default Movie;
