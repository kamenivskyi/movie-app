import Types from './trendingItemTypes';

import MovieService from '../../services/movie-service';

const { getMediaById } = new MovieService();

export const getTrendingItemData = (id, type) => async dispatch => {
  try {
    dispatch(setLoading());

    const data = await getMediaById(id, type);

    dispatch({
      type: Types.GET_TRENDING_ITEM_DATA,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: Types.GET_TRENDING_ITEM_ERROR,
      payload: error.response.statusText
    });
  }
};

const setLoading = () => ({ type: Types.GET_TRENDING_ITEM_LOADING });
