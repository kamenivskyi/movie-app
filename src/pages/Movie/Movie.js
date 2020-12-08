import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MovieView from "./MovieView";
import { getCast } from "../../redux/cast/castActions";
import { getMovieData } from "../../redux/movie/movieActions";
import { getTrailer } from "../../redux/trailer/trailerActions";
import { MOVIE_TYPE } from "../../utils/config";

import "./Movie.css";

const Movie = () => {
  const { cast, loading, movie, trailer } = useSelector(
    ({ cast, movie, trailer }) => ({
      cast: cast.castItems,
      loading: movie.loading,
      movie: movie.movieData,
      trailer: trailer.video,
    })
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrailer(id, MOVIE_TYPE));
    dispatch(getMovieData(id));
    dispatch(getCast(id, MOVIE_TYPE));
  }, [id, dispatch]);

  return (
    <MovieView
      movie={movie}
      cast={cast}
      video={trailer}
      id={id}
      loading={loading}
    />
  );
};

export default Movie;
