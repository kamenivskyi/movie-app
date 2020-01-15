import React, { useReducer } from 'react';
import BannerContext from './bannerContext';
import BannerReducer from './bannerReducer';
import MovieService from '../../services/movie-service';
import { GET_TRENDING } from '../types';

const BannerState = ({ children }) => {
  const { getTrendingMedia } = new MovieService();

  const initialState = [];

  const [state, dispatch] = useReducer(BannerReducer, initialState);

  const getTrending = async (name, type, activePage) => {
    dispatch({
      type: GET_TRENDING,
      payload: await getTrendingMedia(name, type, activePage)
    });
  };

  return (
    <BannerContext.Provider
      value={{
        items: state,
        getTrending
      }}
    >
      {children}
    </BannerContext.Provider>
  );
};

export default BannerState;
