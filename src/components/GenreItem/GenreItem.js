import React from "react";
import { Link } from "react-router-dom";

const GenreItem = ({ genre: { name, id } }) => (
  <li>
    <Link to={`/genre/${id}`} type="button" className="btn btn-primary">
      {name}
    </Link>
  </li>
);
export default GenreItem;
