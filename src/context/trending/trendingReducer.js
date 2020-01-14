import { GET_TRENDING, TRENDING_GET_DATA } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TRENDING:
      return {
        ...state,
        items: action.payload
      };
    case TRENDING_GET_DATA:
      return {
        ...state,
        itemData: action.payload
      };
  }
};
