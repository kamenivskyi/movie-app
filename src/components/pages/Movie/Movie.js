import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getCast } from '../../../redux/cast/castActions';
import { getMovieData, getTrailer } from '../../../redux/media/mediaActions';

import MovieView from './MovieView';

import Spinner from '../../common/Spinner';

import './Movie.css';

const Movie = ({
  match,
  getCast,
  getMovieData,
  getTrailer,
  movie,
  trailer,
  cast,
  loading
}) => {
  const { id } = match.params;

  useEffect(() => {
    getTrailer(id, 'movie');
    getMovieData(id);
    getCast(id, 'movie');
  }, []);

  return (
    <MovieView
      movie={movie}
      type='movie'
      cast={cast}
      video={trailer}
      id={id}
      loading={loading}
    />
  );
};

const mapStateToProps = ({ trending, cast, media }) => ({
  trendingItem: trending.trendingItem,
  cast: cast.castIteovims,
  loading: cast.loading,
  movie: media.movieData,
  trailer: media.trailer
});

export default connect(mapStateToProps, { getCast, getMovieData, getTrailer })(
  Movie
);
