import { combineReducers } from 'redux';

import movieReducer from './movie/movieReducer';
import personPhotosReducer from './personPhotos/personPhotosReducer';
import moviesByFiltersReducer from './moviesByFilters/moviesByFiltersReducer';
import moviesByGenre from './moviesByGenre/moviesByGenreReducer';
import bannerReducer from './banner/bannerReducer';
import searchReducer from './search/searchReducer';
import trendingListReducer from './trendingList/trendingListReducer';
import trendingItemReducer from './trendingItem/trendingItemReducer';
import castReducer from './cast/castReducer';
import personReducer from './person/personReducer';
import trailerReducer from './trailer/trailerReducer';
import firebaseReducer from './firebase/firebaseReducer';

export default combineReducers({
  movie: movieReducer,
  moviesByFilters: moviesByFiltersReducer,
  personPhotos: personPhotosReducer,
  moviesByGenre: moviesByGenre,
  banner: bannerReducer,
  search: searchReducer,
  trendingList: trendingListReducer,
  trendingItem: trendingItemReducer,
  cast: castReducer,
  person: personReducer,
  trailer: trailerReducer,
  firebase: firebaseReducer,
});
