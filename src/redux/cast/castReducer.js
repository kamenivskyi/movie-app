import Types from './castTypes';

const INITIAL_STATE = {
  castItems: [],
  error: false,
  loading: false
};

const castReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_CAST:
      return {
        ...state,
        castItems: action.payload,
        loading: false
      };
    case Types.GET_CAST_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    case Types.GET_CAST_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default castReducer;
