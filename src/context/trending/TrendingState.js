import React, { useReducer } from 'react';
import TrendingContext from './trendingContext';
import TrendingReducer from './trendingReducer';
import MovieService from '../../services/movie-service';
import { GET_TRENDING, TRENDING_GET_DATA } from '../types';

const PopularState = ({ children }) => {
  const { getTrendingMedia, getMediaById } = new MovieService();

  const initialState = {
    items: [],
    itemData: {}
  };

  const [{ items, itemData }, dispatch] = useReducer(
    TrendingReducer,
    initialState
  );

  const getTrendingItems = async (type, period, activePage) => {
    dispatch({
      type: GET_TRENDING,
      payload: await getTrendingMedia(type, period, activePage)
    });
  };
  const getMedia = async (id, type) => {
    dispatch({
      type: TRENDING_GET_DATA,
      payload: await getMediaById(id, type)
    });
  };

  return (
    <TrendingContext.Provider
      value={{
        items,
        itemData,
        getTrendingItems,
        getMedia
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};

export default PopularState;
