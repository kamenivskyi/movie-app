import React, { useReducer } from 'react';
import ResultsContext from './resultsContext';
import ResultsReducer from './resultsReducer';
import MovieService from '../../services/movie-service';

import { SEARCH_MOVIES } from '../types';

const ResultsState = props => {
  const service = new MovieService();
  const { search } = service;

  const initialState = {
    results: []
  };

  const [state, dispatch] = useReducer(ResultsReducer, initialState);

  const searchMovies = async (name, activePage) => {
    dispatch({
      type: SEARCH_MOVIES,
      payload: await search(name, activePage)
    });
  };

  return (
    <ResultsContext.Provider
      value={{
        results: state.results,
        searchMovies
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsState;
