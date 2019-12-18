import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';

const MovieItemView = props => {
  const { title, name, poster_path, vote_average, id } = props.data;
  const { large } = config.API_IMAGE;
  console.log(props);
  return (
    <div className='col-md-4 col-lg-3 mb-3' key={id}>
      <div className='card'>
        <img className='img-fluid' src={`${large}${poster_path}`} alt={title} />
        <span className='badge badge-success position-absolute my-1'>
          Rating: {vote_average} id: {id}
        </span>
        <Link to={`/movie/${id}`} className='py-2'>
          {title || name}
        </Link>
      </div>
    </div>
  );
};
export default MovieItemView;
