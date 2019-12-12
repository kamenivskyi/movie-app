import React, { useReducer } from 'react';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import MovieService from '../../services/movie-service';
import {
  GET_MOVIE,
  GET_PERSON,
  SET_LOADING,
  GET_GENRE_MOVIES,
  GET_CAST
} from '../types';

const MovieState = props => {
  const service = new MovieService();
  const {
    getMovieById,
    getGenreMoviesById,
    getCastById,
    getPersonById
  } = service;

  const initialState = {
    movies: [],
    movie: {},
    genreMovies: [],
    credits: [],
    person: {},
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
  const getCast = async id => {
    setLoading();
    dispatch({ type: GET_CAST, payload: await getCastById(id) });
  };
  const getPerson = async id => {
    setLoading();
    dispatch({ type: GET_PERSON, payload: await getPersonById(id) });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        genreMovies: state.genreMovies,
        cast: state.cast,
        person: state.person,
        loading: state.loading,
        getMovie,
        getGenreMovies,
        getCast,
        getPerson
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
