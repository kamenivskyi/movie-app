import Actions from './bannerTypes';

import MovieService from '../../services/movie-service';

// export const getTrendingMovies = items => ({
//   type: Actions.SET_CURRENT_USER,
//   payload: items
// });

const { getTrendingMedia } = new MovieService();

export const getBannerMovies = (name, type, activePage) => async dispatch => {
  try {
    setLoading();

    const data = await getTrendingMedia(name, type, activePage);

    console.log(data);

    // const res = await fetch('https://jsonplaceholder.typicode.com/todos/5');

    // const data = await res.json();
    // console.log(data);

    dispatch({
      type: Actions.GET_BANNER_ITEMS,
      payload: data.results
    });
  } catch (error) {
    dispatch({
      type: Actions.BANNER_ERROR,
      payload: error.response.statusText
    });
  }
};

export const setLoading = () => ({ type: Actions.SET_LOADING });
