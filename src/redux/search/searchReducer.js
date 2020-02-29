import Types from './searchTypes';

const INITIAL_STATE = {
  items: null,
  error: false,
  loading: false
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SEARCH_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case Types.SEARCH_ERROR:
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
export default searchReducer;
