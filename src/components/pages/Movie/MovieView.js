import React from 'react';
import Genres from '../../genres/Genres';
import Finances from './Finances';
import Cast from './Cast';
import withSpinner from '../../hoc-helpers/withSpinner';
import config from '../../../config';

// import Companies from './Companies';

const MovieView = ({ movie, cast }) => {
  const {
    title,
    id,
    poster_path,
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

  const image = `${original}${backdrop_path}`;

  return (
    <React.Fragment>
      <div className='card movie mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            {poster_path && (
              <img src={image} className='card-img' alt={title} />
            )}
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              {title && <h3 className='card-title'>{title}</h3>}
              {overview && (
                <>
                  <h4>Description: </h4>
                  <p className='card-text'>{overview}</p>
                </>
              )}
              {release_date && (
                <div className='card-text'>Release: {release_date}</div>
              )}
              <Genres genres={genres} />
            </div>
          </div>
        </div>
        <Cast data={cast} />
        <Finances budget={budget} revenue={revenue} />
      </div>
    </React.Fragment>
  );
};

export default withSpinner(MovieView);
