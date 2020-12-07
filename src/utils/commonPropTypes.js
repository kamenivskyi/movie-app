import PropTypes from "prop-types";

export const mediaView = {
  poster_path: PropTypes.string,
  backdrop_path: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.array,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  release_date: PropTypes.string,
  runtime: PropTypes.number,
  vote_average: PropTypes.number,
  production_companies: PropTypes.arrayOf(PropTypes.object),
  networks: PropTypes.arrayOf(PropTypes.object),
};

export const castItemShape = PropTypes.shape({
  charachter: PropTypes.string,
  profile_path: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
});

export const companiesAndNetworksShape = PropTypes.shape({
  name: PropTypes.string,
  logo_path: PropTypes.string,
});

export const genreItemShape = PropTypes.shape({
  name: PropTypes.string,
  id: PropTypes.number,
});
