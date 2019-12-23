import React, { useContext, useEffect, useState } from 'react';
import MovieContext from '../../../context/movie/movieContext';
import MovieView from './MovieView';
import MovieService from '../../../services/movie-service';
import './Movie.css';

const Movie = ({ match }) => {
  const [video, setVideo] = useState('');
  const service = new MovieService();
  const movieContext = useContext(MovieContext);
  const { getMovie, movie, getCast, cast } = movieContext;

  useEffect(() => {
    const { id } = match.params;
    service.getVideo(id).then(res => setVideo(res));
    getMovie(id);
    getCast(id);
  }, []);

  return <MovieView movie={movie} cast={cast} video={video} />;
};

export default Movie;
