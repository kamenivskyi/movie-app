import Types from './personTypes';

import MovieService from '../../services/movie-service';

const { getPersonById } = new MovieService();

export const getPerson = id => async dispatch => {
  try {
    dispatch(setLoading());
    const data = await getPersonById(id);

    dispatch({ type: Types.GET_PERSON, payload: data });
  } catch (error) {
    dispatch({
      type: Types.GET_PERSON_ERROR,
      payload: error.response
    });
  }
};

export const setLoading = () => ({ type: Types.GET_PERSON_LOADING });
