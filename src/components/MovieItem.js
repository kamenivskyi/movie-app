import React from 'react';

const MovieItem = ({ movies }) => {
  return (
    <>
      {movies.map(({ title, name, poster_path, vote_average, id }) => {
        return (
          <div className='col-md-4 col-lg-3 mb-3' key={id}>
            <div className='card'>
              <img
                className='img-fluid'
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt='a'
              />
              <span className='badge badge-success position-absolute my-1'>
                Rating: {vote_average}
              </span>
              <h5 className='py-2'>{title || name}</h5>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default MovieItem;
