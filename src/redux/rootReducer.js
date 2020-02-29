import { combineReducers } from 'redux';

import mediaReducer from './media/mediaReducer';
import bannerReducer from './banner/bannerReducer';
import searchReducer from './search/searchReducer';

export default combineReducers({
  media: mediaReducer,
  banner: bannerReducer,
  search: searchReducer
  // user: userReducer,
  // cart: cartReducer
});
