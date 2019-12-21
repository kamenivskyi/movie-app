import React from 'react';
import Genres from './genres/Genres';

const MovieDescription = ({ overview, releaseDate, genres }) => {
  return (
    <div className='description'>
      {overview && (
        <>
          <h4 className='description-title'>Description: </h4>
          <p className='movie-text'>{overview}</p>
        </>
      )}
      {releaseDate && (
        <div className='release'>
          Release: <span className='release-value'>{releaseDate}</span>
        </div>
      )}
      <Genres genres={genres} />
    </div>
  );
};
export default MovieDescription;
