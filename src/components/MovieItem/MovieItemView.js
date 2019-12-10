import React from 'react';
import { Link } from 'react-router-dom';

const MovieItemView = props => {
  const _imgBase = 'https://image.tmdb.org/t/p/w500';
  const { title, name, poster_path, vote_average, id } = props.data;

  return (
    <div className='col-md-4 col-lg-3 mb-3' key={id}>
      <div className='card'>
        <img
          className='img-fluid'
          src={`${_imgBase}${poster_path}`}
          alt={title}
        />
        <span className='badge badge-success position-absolute my-1'>
          Rating: {vote_average}
        </span>
        <Link to={`/movie/${id}`} className='py-2'>
          {title || name}
        </Link>
      </div>
    </div>
  );
};
export default MovieItemView;
