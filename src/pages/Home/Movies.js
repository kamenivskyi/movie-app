import React from "react";
import { useSelector } from "react-redux";

import MoviesView from "./MoviesView";

const Movies = () => {
  const movies = useSelector((state) => state.moviesByFilters.movies);
  const loading = useSelector((state) => state.moviesByFilters.loading);

  return <MoviesView items={movies.results} loading={loading} />;
};

export default Movies;
