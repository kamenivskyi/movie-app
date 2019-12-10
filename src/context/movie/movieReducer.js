import { GET_MOVIE, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    default:
      return state;
  }
};
