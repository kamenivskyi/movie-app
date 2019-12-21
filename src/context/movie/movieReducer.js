import {
  GET_MOVIE,
  SET_LOADING,
  GET_GENRE_MOVIES,
  GET_CAST,
  FILTER_MOVIES,
  GET_PERSON,
  GET_PHOTO,
  GET_TRENDING,
  SEARCH_MOVIES
} from '../types';

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
    case GET_CAST:
      return {
        ...state,
        cast: action.payload,
        loading: false
      };
    case GET_PERSON:
      return {
        ...state,
        person: action.payload,
        loading: false
      };
    case GET_PHOTO:
      return {
        ...state,
        photos: action.payload,
        loading: false
      };
    case GET_TRENDING:
      return {
        ...state,
        bannerMovies: action.payload,
        loading: false
      };
    case FILTER_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
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
