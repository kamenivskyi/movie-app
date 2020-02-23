import React, { useReducer } from 'react';
import TrendingContext from './trendingContext';
import TrendingReducer from './trendingReducer';
import MovieService from '../../services/movie-service';
import { GET_TRENDING, TRENDING_GET_DATA, SET_LOADING } from '../types';

const PopularState = ({ children }) => {
  const { getTrendingMedia, getMediaById } = new MovieService();

  const initialState = {
    items: [],
    itemData: {},
    loading: false
  };

  const [{ items, itemData, loading }, dispatch] = useReducer(
    TrendingReducer,
    initialState
  );

  const getTrendingItems = async (type, period, activePage) => {
    setLoading();
    dispatch({
      type: GET_TRENDING,
      payload: await getTrendingMedia(type, period, activePage)
    });
  };

  const getMedia = async (id, type) => {
    setLoading();
    dispatch({
      type: TRENDING_GET_DATA,
      payload: await getMediaById(id, type)
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <TrendingContext.Provider
      value={{
        items,
        loading,
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
