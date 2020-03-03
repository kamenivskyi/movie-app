import Types from './personPhotosTypes';

const INITIAL_STATE = {
  photos: [],
  error: false,
  loading: false
};

const personPhotosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_PERSON_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        loading: false
      };
    case Types.GET_PERSON_PHOTOS_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    case Types.GET_PERSON_PHOTOS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default personPhotosReducer;
