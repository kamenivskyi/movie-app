import { GET_TRENDING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TRENDING:
      return action.payload;
    default:
      return state;
  }
};
