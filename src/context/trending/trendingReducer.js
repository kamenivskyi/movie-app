import { GET_TRENDING, TRENDING_GET_DATA, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TRENDING:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case SET_LOADING:
      return { ...state, loading: true };
    case TRENDING_GET_DATA:
      return {
        ...state,
        itemData: action.payload,
        loading: false
      };
  }
};
