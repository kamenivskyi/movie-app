import Types from './moviesByFiltersTypes';

const INITIAL_STATE = {
  movies: [],
  error: false,
  loading: false
};

const mediaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_MOVIES_BY_FILTERS:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case Types.GET_MOVIES_BY_FILTERS_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    case Types.GET_MOVIES_BY_FILTERS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default mediaReducer;
