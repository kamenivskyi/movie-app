import { SET_LOADING, SET_USER, LOG_OUT, SET_BOOKMARKS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true,
        loading: false
      };
    case SET_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
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
