import { SEARCH_MOVIES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        results: action.payload
      };
  }
};
