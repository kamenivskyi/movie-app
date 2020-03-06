import Types from './searchTypes';

const INITIAL_STATE = {
  items: [],
  error: false,
  loading: false
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_SEARCH_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case Types.GET_SEARCH_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    case Types.GET_BY_SEARCH_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default searchReducer;
