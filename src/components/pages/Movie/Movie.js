import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getCast } from '../../../redux/cast/castActions';
import { getMovieData } from '../../../redux/movie/movieActions';
import { getTrailer } from '../../../redux/trailer/trailerActions';

import MovieView from './MovieView';

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
  }, [id]);

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

const mapStateToProps = ({ trendingItem, cast, movie, trailer }) => ({
  trendingItem: trendingItem.item,
  cast: cast.castItems,
  loading: movie.loading,
  movie: movie.movieData,
  trailer: trailer.video
});

export default connect(mapStateToProps, { getCast, getMovieData, getTrailer })(
  Movie
);
