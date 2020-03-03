import Types from './personPhotosTypes';

import MovieService from '../../services/movie-service';

const { getPersonPhotoById } = new MovieService();

export const getPersonPhotos = id => async dispatch => {
  try {
    dispatch(setLoading());

    const data = await getPersonPhotoById(id);

    dispatch({ type: Types.GET_PERSON_PHOTOS, payload: data });
  } catch (error) {
    dispatch({
      type: Types.GET_PERSON_PHOTOS_ERROR,
      payload: error.response.statusText
    });
  }
};

export const setLoading = () => ({ type: Types.GET_PERSON_PHOTOS_LOADING });
