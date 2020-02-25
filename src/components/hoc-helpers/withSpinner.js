import React, { useContext } from 'react';
import Spinner from '../common/Spinner';
import MovieContext from '../../context/movie/movieContext';

const withSpinner = View => {
  return props => {
    const { loading } = useContext(MovieContext);
    if (loading) {
      return <Spinner />;
    }
    return <View {...props} />;
  };
};
export default withSpinner;
