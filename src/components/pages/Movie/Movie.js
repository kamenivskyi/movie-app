import React, { useContext, useEffect } from 'react';
import MovieContext from '../../../context/movie/movieContext';
import MovieView from './MovieView';
import MovieService from '../../../services/movie-service';
import './Movie.css';

const Movie = ({ match }) => {
  const movieContext = useContext(MovieContext);
  const { getMovie, movie, getCast, cast } = movieContext;
  // const { base, cast } = movie;

  useEffect(() => {
    const { id } = match.params;
    getMovie(id);
    getCast(id);
    // console.log(service.getCreditsById(id));
  }, []);
  console.log(movie);
  return <MovieView movie={movie} cast={cast} />;
};

export default Movie;
