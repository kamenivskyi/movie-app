import React from "react";
import { useSelector } from "react-redux";

import MoviesByFiltersView from "./MoviesByFiltersView";

const MoviesByFilters = () => {
  const { movies, loading } = useSelector((state) => state.moviesByFilters);

  return <MoviesByFiltersView items={movies.results} loading={loading} />;
};

export default MoviesByFilters;
