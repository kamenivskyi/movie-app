import Types from './movieTypes';

const INITIAL_STATE = {
  movieData: {},
  error: false,
  loading: false
};

const mediaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_MOVIE_DATA:
      return {
        ...state,
        movieData: action.payload,
        loading: false
      };
    case Types.GET_MOVIE_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case Types.GET_MOVIE_DATA_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default mediaReducer;
