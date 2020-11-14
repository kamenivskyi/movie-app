import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container not-found-wrapper">
      <div className="error-code">
        <i className="fas fa-exclamation-circle"></i> 404
      </div>
      <h1 className="not-found-message">
        <i className="fas fa-bug"></i> The page you are looking for does not
        exist..
      </h1>
      <Link className="btn btn-success d-block mt-4" to="/">
        Back to home page
      </Link>
    </div>
  );
};

export default NotFound;
