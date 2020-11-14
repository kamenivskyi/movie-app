import React from "react";
import MediaItems from "../../components/MediaItems";

import withSpinner from "../../hocs/withSpinner";

const MoviesView = ({ items }) => {
  return <MediaItems items={items} type="movie" />;
};

export default withSpinner(MoviesView);
