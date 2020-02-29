import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import MovieContext from '../../../context/movie/movieContext';
import { getCast } from '../../../redux/cast/castActions';

import MovieService from '../../../services/movie-service';

import MovieView from './MovieView';

import Spinner from '../../common/Spinner';
import './Movie.css';

const Movie = ({ match, getCast, cast, loading }) => {
  const [video, setVideo] = useState('');
  const { getVideo } = new MovieService();
  const { getMovie, movie } = useContext(MovieContext);
  const { id } = match.params;

  useEffect(() => {
    getVideo(id, 'movie').then(res => setVideo(res));
    getMovie(id, 'movie');
    getCast(id, 'movie');
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <MovieView movie={movie} type='movie' cast={cast} video={video} id={id} />
    );
  }
};

const mapStateToProps = state => ({
  trendingItem: state.trending.trendingItem,
  cast: state.cast.castItems,
  loading: state.cast.loading
});

export default connect(mapStateToProps, { getCast })(Movie);
