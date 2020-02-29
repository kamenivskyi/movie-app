import React from 'react';
import Spinner from '../common/Spinner';

const withSpinner = View => loading => {
  return props => {
    if (loading) {
      return <Spinner />;
    }
    return <View {...props} />;
  };
};
export default withSpinner;
