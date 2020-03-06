import Types from './searchTypes';

import MovieService from '../../services/movie-service';

const { search } = new MovieService();

export const searchItems = (value, page) => async dispatch => {
  try {
    dispatch(setLoading());

    const data = await search(value, page);

    dispatch({
      type: Types.GET_SEARCH_ITEMS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: Types.GET_SEARCH_ERROR,
      payload: error.response.statusText
    });
  }
};

export const setLoading = () => ({ type: Types.GET_BY_SEARCH_LOADING });
