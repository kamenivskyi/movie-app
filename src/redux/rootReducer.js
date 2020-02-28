import { combineReducers } from 'redux';

import mediaReducer from './media/mediaReducer';
import bannerReducer from './banner/bannerReducer';
// import userReducer from './user/user.reducer';
// import cartReducer from './cart/cart.reducer';

export default combineReducers({
  media: mediaReducer,
  banner: bannerReducer
  // user: userReducer,
  // cart: cartReducer
});
