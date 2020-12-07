import React from "react";
import { Link } from "react-router-dom";

import { genreItemShape } from "../../utils/commonPropTypes";

const GenreItem = ({ genre: { name, id } }) => (
  <li>
    <Link to={`/genre/${id}`} type="button" className="btn btn-primary">
      {name}
    </Link>
  </li>
);

GenreItem.propTypes = {
  genre: genreItemShape,
};

export default GenreItem;
