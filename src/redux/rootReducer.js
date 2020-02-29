import { combineReducers } from 'redux';

import mediaReducer from './media/mediaReducer';
import bannerReducer from './banner/bannerReducer';
import searchReducer from './search/searchReducer';
import trendingReducer from './trending/trendingReducer';
import castReducer from './cast/castReducer';

export default combineReducers({
  media: mediaReducer,
  banner: bannerReducer,
  search: searchReducer,
  trending: trendingReducer,
  cast: castReducer
});
