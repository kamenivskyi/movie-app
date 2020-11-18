import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo = "/",
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

ProtectedRoute.propTypes = {
  redirectTo: PropTypes.string,
};

export default ProtectedRoute;
