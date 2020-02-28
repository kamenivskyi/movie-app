import Actions from './bannerTypes';

const INITIAL_STATE = {
  bannerItems: null,
  bannerError: false,
  loading: false
};

const bannerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.GET_BANNER_ITEMS:
      return {
        ...state,
        bannerItems: action.payload,
        loading: false
      };
    case Actions.BANNER_ERROR:
      return {
        ...state,
        bannerError: true,
        loading: false
      };
    case Actions.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default bannerReducer;
