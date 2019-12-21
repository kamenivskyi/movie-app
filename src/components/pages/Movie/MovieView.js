import React from 'react';
import Finances from './Finances';
import Cast from './Cast';
import withSpinner from '../../hoc-helpers/withSpinner';
import config from '../../../config';
import MovieDescription from './MovieDescription';

// import Companies from './Companies';

const MovieView = ({ movie, cast }) => {
  const {
    title,
    id,
    backdrop_path,
    overview,
    genres,
    budget,
    revenue,
    release_date
  } = movie;

  const {
    API_IMAGE: { original }
  } = config;

  const image = backdrop_path
    ? `${original}${backdrop_path}`
    : 'http://www.ahmproduction.com/wp-content/uploads/2016/05/film-background-1334067869u9d.jpg';

  return (
    <React.Fragment>
      <div className='movie' style={{ backgroundImage: `url(${image})` }}>
        {title && <h3 className='movie-title'>{title}</h3>}
        <MovieDescription
          overview={overview}
          releaseDate={release_date}
          genres={genres}
        />
      </div>
      <Finances budget={budget} revenue={revenue} />
      <Cast data={cast} />
    </React.Fragment>
  );
};

export default withSpinner(MovieView);
