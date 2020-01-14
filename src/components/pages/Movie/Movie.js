import React, { useContext, useEffect, useState } from 'react';
import MovieContext from '../../../context/movie/movieContext';
import MovieView from './MovieView';
import MovieService from '../../../services/movie-service';
import './Movie.css';
import Spinner from '../../common/Spinner';

const Movie = ({ match }) => {
  const [video, setVideo] = useState('');
  const { getVideo } = new MovieService();
  const { getMovie, movie, getCast, cast, loading } = useContext(MovieContext);
  const { id } = match.params;

  useEffect(() => {
    getVideo(id, 'movie').then(res => setVideo(res));
    getMovie(id, 'movie');
    getCast(id, 'movie');
  }, []);
  if (loading) {
    return <Spinner />;
  } else {
    return <MovieView movie={movie} cast={cast} video={video} id={id} />;
  }
};

export default Movie;
