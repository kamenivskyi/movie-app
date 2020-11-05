import Types from './firebaseTypes';

const INITIAL_STATE = {
  userData: {},
  bookmarks: [],
  error: false,
  bookmarksLoading: false,
};

const firebaseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SET_USER:
      return {
        ...state,
        userData: action.payload,
        bookmarksLoading: false,
      };
    case Types.SET_USER_SIGNIN:
      return {
        ...state,
        userData: action.payload,
        bookmarksLoading: false,
      };
    case Types.GET_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.payload,
        bookmarksLoading: false,
      };
    case Types.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        bookmarksLoading: false,
      };
    case Types.SET_BOOKMARKS_LOADING:
      return {
        ...state,
        bookmarksLoading: true,
      };
    default:
      return state;
  }
};
export default firebaseReducer;
