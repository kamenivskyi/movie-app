import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getMoviesByGenre } from "../../redux/moviesByGenre/moviesByGenreActions";

import MediaItems from "../../components/MediaItems";

import "./GenrePage.css";

const GenreMovies = () => {
  const { movies } = useSelector(({ moviesByGenre }) => moviesByGenre);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMoviesByGenre(id));
  }, [id, dispatch]);

  return (
    <section className="genre-page">
      <div className="container">
        <div className="row">
          <MediaItems items={movies} type="movie" />
        </div>
      </div>
    </section>
  );
};

export default GenreMovies;
