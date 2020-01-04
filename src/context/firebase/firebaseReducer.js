import { SET_LOADING, SET_USER, LOG_OUT, SET_USER_DATA } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_USER_DATA:
      return {
        ...state,
        currentUser: action.payload,
        loading: false
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        loading: false
      };
    default:
      return state;
  }
};
