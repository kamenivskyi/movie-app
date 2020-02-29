import Types from './searchTypes';

import MovieService from '../../services/movie-service';

const { search } = new MovieService();

export const searchItems = (value, page) => async dispatch => {
  try {
    setLoading();

    const data = await search(value, page);

    dispatch({
      type: Types.SEARCH_ITEMS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: Types.SEARCH_ERROR,
      payload: error.response.statusText
    });
  }
};

export const setLoading = () => ({ type: Types.SET_LOADING });
