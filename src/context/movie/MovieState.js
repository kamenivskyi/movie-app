import React, { useReducer } from 'react';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import MovieService from '../../services/movie-service';
import {
  GET_MOVIE,
  GET_PERSON,
  GET_PHOTO,
  SET_LOADING,
  GET_GENRE_MOVIES,
  GET_CAST,
  SEARCH_MOVIES,
  FILTER_MOVIES
} from '../types';

const MovieState = ({ children }) => {
  const {
    getMediaById,
    getGenreMoviesById,
    getCastByType,
    getPersonById,
    getPersonPhotoById,
    searchMoviesByName,
    getDiscoverMovies
  } = new MovieService();

  const initialState = {
    movies: [],
    movie: {},
    genreMovies: [],
    credits: [],
    person: {},
    photos: [],
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
  const getCast = async (id, type) => {
    setLoading();
    dispatch({ type: GET_CAST, payload: await getCastByType(id, type) });
  };
  const getPerson = async id => {
    setLoading();
    dispatch({ type: GET_PERSON, payload: await getPersonById(id) });
  };
  const getPhoto = async id => {
    setLoading();
    dispatch({ type: GET_PHOTO, payload: await getPersonPhotoById(id) });
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
        cast: state.cast,
        person: state.person,
        loading: state.loading,
        photos: state.photos,
        filterMovies,
        searchMovies,
        getMovie,
        getPhoto,
        getGenreMovies,
        getCast,
        getPerson
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieState;
