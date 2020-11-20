import React from "react";
import Spinner from "../components/Spinner";

const withSpinner = (ViewComponent) => ({ loading, ...props }) => {
  if (loading) {
    return <Spinner />;
  }
  return <ViewComponent {...props} />;
};
export default withSpinner;
