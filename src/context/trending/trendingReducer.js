import { GET_TRENDING, TRENDING_GET_DATA, SET_LOADING } from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case GET_TRENDING:
      return {
        ...state,
        items: payload,
        loading: false
      };
    case SET_LOADING:
      return { ...state, loading: true };
    case TRENDING_GET_DATA:
      return {
        ...state,
        itemData: payload,
        loading: false
      };
  }
};
