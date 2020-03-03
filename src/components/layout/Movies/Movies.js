import React from 'react';
import { connect } from 'react-redux';

import MediaItems from '../MediaItems';

import Spinner from '../../common/Spinner';

const Movies = props => {
  const { movies, loading } = props;

  if (loading) {
    return <Spinner />;
  } else {
    return <MediaItems items={movies.results} type='movie' />;
  }
};

const mapStateToProps = ({ moviesByFilters: { movies, loading } }) => ({
  movies,
  loading
});

export default connect(mapStateToProps)(Movies);
