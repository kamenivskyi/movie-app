import React, { useReducer } from 'react';
import ResultsContext from './resultsContext';
import ResultsReducer from './resultsReducer';
import MovieService from '../../services/movie-service';
import { SEARCH_MOVIES } from '../types';

const ResultsState = ({ children }) => {
  const { search } = new MovieService();

  const initialState = {
    items: []
  };

  const [{ items }, dispatch] = useReducer(ResultsReducer, initialState);

  const searchMovies = async (name, activePage) => {
    dispatch({
      type: SEARCH_MOVIES,
      payload: await search(name, activePage)
    });
  };

  return (
    <ResultsContext.Provider
      value={{
        items,
        searchMovies
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsState;
