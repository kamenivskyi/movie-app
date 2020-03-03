import Types from './castTypes';

import MovieService from '../../services/movie-service';

const { getCastByType } = new MovieService();

export const getCast = (id, type) => async dispatch => {
  try {
    dispatch(setLoading());

    const data = await getCastByType(id, type);

    dispatch({ type: Types.GET_CAST, payload: data });
  } catch (error) {
    dispatch({
      type: Types.GET_CAST_ERROR,
      payload: error.response.statusText
    });
  }
};

const setLoading = () => ({ type: Types.GET_CAST_LOADING });
