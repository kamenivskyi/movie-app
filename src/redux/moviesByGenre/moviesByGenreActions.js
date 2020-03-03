import Types from './moviesByGenreTypes';

import MovieService from '../../services/movie-service';

const { getGenreMoviesById } = new MovieService();

export const getMoviesByGenre = genreId => async dispatch => {
  try {
    dispatch(setLoading());

    const data = await getGenreMoviesById(genreId);

    dispatch({
      type: Types.GET_MOVIES_BY_GENRE_ID,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: Types.GOT_MOVIES_BY_GENRE_ID_ERROR,
      payload: error.response.statusText
    });
  }
};

const setLoading = () => ({ type: Types.GET_MOVIES_BY_GENRE_ID_LOADING });
