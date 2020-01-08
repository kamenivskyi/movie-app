import React, { useContext, useEffect, useState } from 'react';
import { withSpinner } from 'react-router-dom';
import MovieContext from '../../../context/movie/movieContext';
import MovieView from './MovieView';
import MovieService from '../../../services/movie-service';
import './Movie.css';

const Movie = ({ match }) => {
  const [video, setVideo] = useState('');
  const { getVideo } = new MovieService();
  const { getMovie, movie, getCast, cast } = useContext(MovieContext);
  const { id } = match.params;

  useEffect(() => {
    getVideo(id, 'movie').then(res => setVideo(res));
    getMovie(id);
    getCast(id);
  }, []);

  return (
    <MovieView movie={movie} cast={cast} video={video} id={id} type={'movie'} />
  );
};

export default Movie;
