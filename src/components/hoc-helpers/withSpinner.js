import React, { useContext } from 'react';
import Spinner from '../common/Spinner';
import MovieContext from '../../context/movie/movieContext';

const withSpinner = View => {
  return props => {
    const movieContext = useContext(MovieContext);
    if (movieContext.loading) {
      return <Spinner />;
    }
    return <View {...props} />;
  };
};
export default withSpinner;
