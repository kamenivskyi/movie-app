import Types from './bannerTypes';

const INITIAL_STATE = {
  bannerItems: null,
  bannerError: false,
  loading: false
};

const bannerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_BANNER_ITEMS:
      return {
        ...state,
        bannerItems: action.payload,
        loading: false
      };
    case Types.BANNER_ERROR:
      return {
        ...state,
        bannerError: true,
        loading: false
      };
    case Types.SET_BANNER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default bannerReducer;
