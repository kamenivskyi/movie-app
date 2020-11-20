import React from "react";

import GenreItem from "../GenreItem";

import "./Genres.css";

const GenresList = ({ genres }) => (
  <>
    {genres && (
      <>
        <h5 className="card-title py-2">Genres </h5>
        <ul className="genres">
          {genres.map((genre) => (
            <GenreItem genre={genre} key={genre.id} />
          ))}
        </ul>
      </>
    )}
  </>
);

export default GenresList;
