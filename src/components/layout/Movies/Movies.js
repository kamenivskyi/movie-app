import React from 'react';
import { connect } from 'react-redux';

import MediaItems from '../MediaItems';

import Spinner from '../Spinner';

const Movies = ({ movies, loading }) => {
  if (loading) {
    return <Spinner />;
  } 

  return <MediaItems items={movies.results} type='movie' />;
  
};

const mapStateToProps = ({ moviesByFilters: { movies, loading } }) => ({
  movies,
  loading
});

export default connect(mapStateToProps)(Movies);
