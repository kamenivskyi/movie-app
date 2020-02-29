import Types from '../types';

const INITIAL_STATE = {
  trendingList: [],
  trendingItem: {},
  error: false,
  loading: false
};

const trendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_TRENDING_LIST:
      return {
        ...state,
        trendingList: action.payload,
        loading: false
      };
    case Types.GET_TRENDING_ITEM_DATA:
      return {
        ...state,
        trendingItem: action.payload,
        loading: false
      };
    case Types.GET_TRENDING_ERROR:
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
export default trendingReducer;
