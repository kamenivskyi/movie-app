import React, { useReducer } from 'react';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import MovieService from '../../services/movie-service';
import { GET_MOVIE, SET_LOADING } from '../types';

const MovieState = ({ children }) => {
  const { getMediaById } = new MovieService();

  const initialState = {
    movies: [],
    movie: {},
    loading: false
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const getMovie = async id => {
    setLoading();
    dispatch({ type: GET_MOVIE, payload: await getMediaById(id, 'movie') });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        loading: state.loading,
        getMovie
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieState;
