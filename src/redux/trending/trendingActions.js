import Types from '../types';

import MovieService from '../../services/movie-service';

const { getTrendingMedia, getMediaById } = new MovieService();

export const getTrendingList = (type, period, activePage) => async dispatch => {
  try {
    setLoading();

    const data = await getTrendingMedia(type, period, activePage);

    dispatch({
      type: Types.GET_TRENDING_LIST,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: Types.GET_TRENDING_ERROR,
      payload: error.response.statusText
    });
  }
};

export const getTrendingItemData = (id, type) => async dispatch => {
  try {
    setLoading();

    const data = await getMediaById(id, type);
    console.log(data);

    dispatch({
      type: Types.GET_TRENDING_ITEM_DATA,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: Types.GOT_ERROR,
      payload: error.response.statusText
    });
  }
};

const setLoading = () => ({ type: Types.SET_LOADING });
