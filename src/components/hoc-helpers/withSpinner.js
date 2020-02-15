import React, { useContext } from 'react';
import Spinner from '../common/Spinner';
import MovieContext from '../../context/movie/movieContext';

const withSpinner = View => {
  return props => {
    const movieContext = useContext(MovieContext);
    if (movieContext.loading) {
      console.log(movieContext);
      return <Spinner />;
    }
    console.log(movieContext);
    return <View {...props} />;
  };
};
export default withSpinner;
