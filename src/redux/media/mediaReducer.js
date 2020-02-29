import Types from '../types';

const INITIAL_STATE = {
  moviesByFilters: [],
  moviesByGenre: [],
  movieData: {},
  trailer: {},
  error: false,
  loading: false
};

const mediaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_MOVIES_BY_FILTERS:
      return {
        ...state,
        moviesByFilters: action.payload,
        loading: false
      };
    case Types.GET_MOVIES_BY_GENRE_ID:
      return {
        ...state,
        moviesByGenre: action.payload,
        loading: false
      };
    case Types.GET_MOVIE_DATA:
      return {
        ...state,
        movieData: action.payload,
        loading: false
      };
    case Types.GET_TRAILER:
      return {
        ...state,
        trailer: action.payload
      };
    case Types.GOT_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    case Types.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default mediaReducer;
