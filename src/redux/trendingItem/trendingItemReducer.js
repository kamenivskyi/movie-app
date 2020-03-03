import Types from './trendingItemTypes';

const INITIAL_STATE = {
  item: {},
  error: false,
  loading: false
};

const trendingItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_TRENDING_ITEM_DATA:
      return {
        ...state,
        item: action.payload,
        loading: false
      };
    case Types.GET_TRENDING_ITEM_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    case Types.GET_TRENDING_ITEM_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default trendingItemReducer;
