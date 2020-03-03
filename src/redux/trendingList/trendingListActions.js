import Types from './trendingListTypes';

import MovieService from '../../services/movie-service';

const { getTrendingMedia } = new MovieService();

export const getTrendingList = (type, period, activePage) => async dispatch => {
  try {
    dispatch(setLoading());

    const data = await getTrendingMedia(type, period, activePage);

    dispatch({
      type: Types.GET_TRENDING_LIST,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: Types.GET_TRENDING_LIST_ERROR,
      payload: error.response.statusText
    });
  }
};

const setLoading = () => ({ type: Types.GET_TRENDING_LIST_LOADING });
