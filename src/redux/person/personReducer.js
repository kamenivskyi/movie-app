import Types from '../types';

const INITIAL_STATE = {
  personData: {},
  personPhotos: [],
  error: false,
  loading: false
};

const personReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_PERSON:
      return {
        ...state,
        personData: action.payload,
        loading: false
      };
    case Types.GET_PERSON_PHOTOS:
      return {
        ...state,
        personPhotos: action.payload,
        loading: false
      };
    case Types.GET_ERROR:
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
export default personReducer;
