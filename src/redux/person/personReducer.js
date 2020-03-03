import Types from './personTypes';

const INITIAL_STATE = {
  personData: {},
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
    case Types.GET_PERSON_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    case Types.GET_PERSON_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default personReducer;
