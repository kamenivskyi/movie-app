import React, { useContext, useEffect } from 'react';
import MovieContext from '../../context/movie/movieContext';

const Movie = props => {
  const movieContext = useContext(MovieContext);
  const { getMovie } = movieContext;

  useEffect(() => {
    getMovie(props.match.params.id);
  }, []);

  return <div>Movie)))</div>;
};

export default Movie;
