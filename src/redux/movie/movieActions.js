import Types from './movieTypes';

import MovieService from '../../services/movie-service';

const { getMediaById } = new MovieService();

export const getMovieData = movieId => async dispatch => {
  try {
    dispatch(setLoading());

    const data = await getMediaById(movieId, 'movie');

    dispatch({
      type: Types.GET_MOVIE_DATA,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: Types.GET_MOVIE_DATA_ERROR,
      payload: error.response.statusText
    });
  }
};

const setLoading = () => ({ type: Types.GET_MOVIE_DATA_LOADING });
