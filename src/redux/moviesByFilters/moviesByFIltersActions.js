import Types from './moviesByFiltersTypes';

import MovieService from '../../services/movie-service';

const { getDiscoverMovies } = new MovieService();

export const getMoviesByFilters = (
  activePage,
  sortBy,
  isAdult,
  year
) => async dispatch => {
  try {
    dispatch(setLoading());

    const data = await getDiscoverMovies(activePage, sortBy, isAdult, year);

    dispatch({ type: Types.GET_MOVIES_BY_FILTERS, payload: data });
  } catch (error) {
    dispatch({
      type: Types.GET_MOVIES_BY_FILTERS_ERROR,
      payload: error.response
    });
  }
};

const setLoading = () => ({ type: Types.GET_MOVIES_BY_FILTERS_LOADING });
