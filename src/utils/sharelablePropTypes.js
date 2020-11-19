import PropTypes from "prop-types";

export const mediaPropTypes = {
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

export const castItemShapePropTypes = PropTypes.shape({
  charachter: PropTypes.string,
  profile_path: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
});

export const companiesAndNetworksPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    logo_path: PropTypes.string,
  })
);
