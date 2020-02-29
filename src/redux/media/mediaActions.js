import Types from '../types';

import MovieService from '../../services/movie-service';

const {
  getDiscoverMovies,
  getGenreMoviesById,
  getMediaById,
  getVideo
} = new MovieService();

export const getMoviesByFilters = (
  activePage,
  sortBy,
  isAdult,
  year
) => async dispatch => {
  try {
    setLoading();

    const data = await getDiscoverMovies(activePage, sortBy, isAdult, year);

    dispatch({
      type: Types.GET_MOVIES_BY_FILTERS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: Types.GOT_ERROR,
      payload: error.response.statusText
    });
  }
};

export const getMoviesByGenre = genreId => async dispatch => {
  try {
    setLoading();

    const data = await getGenreMoviesById(genreId);

    dispatch({
      type: Types.GET_MOVIES_BY_GENRE_ID,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: Types.GOT_ERROR,
      payload: error.response.statusText
    });
  }
};

export const getMovieData = movieId => async dispatch => {
  try {
    setLoading();

    const data = await getMediaById(movieId, 'movie');

    dispatch({
      type: Types.GET_MOVIE_DATA,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: Types.GOT_ERROR,
      payload: error.response.statusText
    });
  }
};

export const getTrailer = (movieId, type) => async dispatch => {
  try {
    const data = await getVideo(movieId, type);

    dispatch({
      type: Types.GET_TRAILER,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: Types.GOT_ERROR,
      payload: error.response.statusText
    });
  }
};

const setLoading = () => ({ type: Types.SET_LOADING });
