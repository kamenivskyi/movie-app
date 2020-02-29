import React, { useContext } from 'react';
import { connect } from 'react-redux';

import MediaItems from '../MediaItems';

import Spinner from '../../common/Spinner';

const Movies = ({ movies, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return <MediaItems items={movies.results} type='movie' />;
  }
};

const mapStateToProps = state => ({
  movies: state.media.moviesByFilters,
  loading: state.media.loading
});

export default connect(mapStateToProps)(Movies);
