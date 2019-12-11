import React, { useReducer } from 'react';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import MovieService from '../../services/movie-service';
import { GET_MOVIE, SET_LOADING, GET_GENRE_MOVIES } from '../types';

const MovieState = props => {
  const service = new MovieService();
  const { getMovieById, getGenreMoviesById } = service;

  const initialState = {
    movies: [],
    movie: {},
    genreMovies: [],
    loading: false,
    alert: null
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const getMovie = async id => {
    setLoading();
    dispatch({ type: GET_MOVIE, payload: await getMovieById(id) });
  };
  const getGenreMovies = async id => {
    setLoading();
    dispatch({ type: GET_GENRE_MOVIES, payload: await getGenreMoviesById(id) });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        genreMovies: state.genreMovies,
        loading: state.loading,
        getMovie,
        getGenreMovies
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
