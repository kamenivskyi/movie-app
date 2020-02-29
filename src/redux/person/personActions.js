import Types from '../types';

import MovieService from '../../services/movie-service';

const { getPersonById, getPersonPhotoById } = new MovieService();

export const getPerson = id => async dispatch => {
  try {
    setLoading();
    const data = await getPersonById(id);

    dispatch({ type: Types.GET_PERSON, payload: data });
  } catch (error) {
    dispatch({ type: Types.GET_ERROR, payload: error.response.statusText });
  }
};

export const getPersonPhotos = id => async dispatch => {
  try {
    setLoading();

    const data = await getPersonPhotoById(id);

    dispatch({ type: Types.GET_PERSON_PHOTOS, payload: data });
  } catch (error) {
    dispatch({ type: Types.GET_ERROR, payload: error.response.statusText });
  }
};

export const setLoading = () => ({ type: Types.SET_LOADING });
