import { GET_MOVIE, SET_LOADING, GET_GENRE_MOVIES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case GET_GENRE_MOVIES:
      return {
        ...state,
        genreMovies: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
