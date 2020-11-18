import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import Genres from "../GenresList";

import { calcTime } from "../../utils/helpers";

const MediaDescription = ({ overview, releaseDate, genres, runtime }) => {
  return (
    <div className="card-body">
      {overview && (
        <div className="card-block">
          <h3 className="card-title">Overview </h3>
          <p className="card-text">{overview}</p>
        </div>
      )}
      {releaseDate && (
        <div className="card-block">
          <h4 className="card-title">Release</h4>
          <p className="card-text">{releaseDate}</p>
        </div>
      )}
      {runtime && (
        <div className="card-block">
          <h5 className="card-title">Runtime</h5>
          <p className="card-text">{calcTime(runtime)}</p>
        </div>
      )}
      <Genres genres={genres} />
    </div>
  );
};
export default MediaDescription;
