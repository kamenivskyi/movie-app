import React from "react";
import PropTypes from "prop-types";

import GenreItem from "../GenreItem";
import { genreItemShape } from "../../utils/commonPropTypes";

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

GenresList.propTypes = {
  genres: PropTypes.arrayOf(genreItemShape),
};

export default GenresList;
