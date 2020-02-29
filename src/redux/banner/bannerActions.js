import Types from './bannerTypes';

import MovieService from '../../services/movie-service';

const { getTrendingMedia } = new MovieService();

export const getBannerMovies = (name, type, activePage) => async dispatch => {
  try {
    setLoading();

    const data = await getTrendingMedia(name, type, activePage);

    dispatch({
      type: Types.GET_BANNER_ITEMS,
      payload: data.results
    });
  } catch (error) {
    dispatch({
      type: Types.BANNER_ERROR,
      payload: error.response.statusText
    });
  }
};

const setLoading = () => ({ type: Types.SET_LOADING });
