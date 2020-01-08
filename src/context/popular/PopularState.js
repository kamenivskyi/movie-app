import React, { useReducer } from 'react';
import PopularContext from './popularContext';
import PopularReducer from './popularReducer';
import MovieService from '../../services/movie-service';
import { GET_TRENDING, TRENDING_GET_DATA } from '../types';

const PopularState = ({ children }) => {
  const { getTrendingMovies, getMediaById } = new MovieService();

  const initialState = {
    items: [],
    itemData: {}
  };

  const [state, dispatch] = useReducer(PopularReducer, initialState);

  const getPopularItems = async (type, activePage) => {
    dispatch({
      type: GET_TRENDING,
      payload: await getTrendingMovies(type, activePage)
    });
  };
  const getMedia = async (id, type) => {
    dispatch({
      type: TRENDING_GET_DATA,
      payload: await getMediaById(id, type)
    });
  };

  return (
    <PopularContext.Provider
      value={{
        items: state.items,
        itemData: state.itemData,
        getPopularItems,
        getMedia
      }}
    >
      {children}
    </PopularContext.Provider>
  );
};

export default PopularState;
