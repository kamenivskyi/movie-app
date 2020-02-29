import React, { useReducer } from 'react';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import MovieService from '../../services/movie-service';
import {
  GET_MOVIE,
  SET_LOADING,
  GET_GENRE_MOVIES,
  SEARCH_MOVIES,
  FILTER_MOVIES
} from '../types';

const MovieState = ({ children }) => {
  const {
    getMediaById,
    getGenreMoviesById,
    searchMoviesByName,
    getDiscoverMovies
  } = new MovieService();

  const initialState = {
    movies: [],
    movie: {},
    genreMovies: [],
    loading: false
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const getMovie = async id => {
    setLoading();
    dispatch({ type: GET_MOVIE, payload: await getMediaById(id, 'movie') });
  };
  const getGenreMovies = async id => {
    setLoading();
    dispatch({ type: GET_GENRE_MOVIES, payload: await getGenreMoviesById(id) });
  };

  const filterMovies = async (activePage, sortBy, isAdult, year) => {
    setLoading();
    dispatch({
      type: FILTER_MOVIES,
      payload: await getDiscoverMovies(activePage, sortBy, isAdult, year)
    });
  };
  const searchMovies = async (name, activePage) => {
    setLoading();
    dispatch({
      type: SEARCH_MOVIES,
      payload: await searchMoviesByName(name, activePage)
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        genreMovies: state.genreMovies,
        loading: state.loading,
        filterMovies,
        searchMovies,
        getMovie,
        getGenreMovies
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieState;
