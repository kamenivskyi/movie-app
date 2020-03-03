import Types from './trendingListTypes';

const INITIAL_STATE = {
  items: [],
  error: false,
  loading: false
};

const trendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_TRENDING_LIST:
      return {
        ...state,
        items: action.payload,
        loading: false
      };

    case Types.GET_TRENDING_LIST_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    case Types.GET_TRENDING_LIST_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default trendingReducer;
