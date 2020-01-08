import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import NotFoundImage from './not-found.jpg';

const MovieItemView = ({ array, type }) => {
  const { large } = config.API_IMAGE;
  return (
    <>
      {array.map(item => {
        const { title, poster_path, vote_average, id } = item;
        const image = poster_path ? large + poster_path : NotFoundImage;

        return (
          <div className='col-sm-6 col-md-4 col-lg-3 mb-3' key={id}>
            <div className='card'>
              <img className='img-fluid' src={image} alt={title} />
              <span className='badge badge-success position-absolute my-1'>
                Rating: {vote_average}
              </span>
              <Link to={`/${type || 'movie'}/${id}`} className='py-2'>
                {title}
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default MovieItemView;
