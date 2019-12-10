import React, { useReducer } from 'react';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import MovieService from '../../services/movie-service';
import { GET_MOVIE, SET_LOADING } from '../types';

const MovieState = props => {
  const service = new MovieService();

  const initialState = {
    movies: [],
    movie: {},
    loading: false,
    alert: null
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  // get movie

  const getMovie = async id => {
    // setLoading();
    const res = service.getMovie(id);
    console.log(res);
    dispatch({ type: GET_MOVIE, payload: res });
  };

  // set loading
  // const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        loading: state.loading,
        getMovie
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
