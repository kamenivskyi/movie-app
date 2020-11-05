import React from 'react';
import Spinner from '../components/layout/Spinner';

const withSpinner = (ViewComponent) => {
  return (props) => {
    if (props.loading) {
      return <Spinner />;
    }
    return <ViewComponent {...props} />;
  };
};
export default withSpinner;
