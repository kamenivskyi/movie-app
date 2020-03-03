import Types from './moviesByGenreTypes';

const INITIAL_STATE = {
  movies: [],
  error: false,
  loading: false
};

const genreMoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_MOVIES_BY_GENRE_ID:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case Types.GET_MOVIES_BY_GENRE_ID_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case Types.GET_MOVIES_BY_GENRE_ID_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default genreMoviesReducer;
