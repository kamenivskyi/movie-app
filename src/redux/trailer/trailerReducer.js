import Types from './trailerTypes';

const INITIAL_STATE = {
  video: {},
  error: false,
  loading: false
};

const mediaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_TRAILER:
      return {
        ...state,
        video: action.payload,
        loading: false
      };
    case Types.GET_TRAILER_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    case Types.GET_TRAILER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default mediaReducer;
