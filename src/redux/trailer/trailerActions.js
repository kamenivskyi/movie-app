import Types from './trailerTypes';

import MovieService from '../../services/movie-service';

const { getVideo } = new MovieService();

export const getTrailer = (movieId, type) => async dispatch => {
  try {
    const data = await getVideo(movieId, type);

    dispatch({
      type: Types.GET_TRAILER,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: Types.GET_TRAILER_ERROR,
      payload: error.response.statusText
    });
  }
};
