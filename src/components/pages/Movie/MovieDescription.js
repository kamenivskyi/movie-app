import React from 'react';
import Genres from './genres/Genres';

const MovieDescription = ({ overview, releaseDate, genres, runtime }) => {
  return (
    <div className='description'>
      {overview && (
        <>
          <h4 className='description-title'>Description: </h4>
          <p className='movie-text'>{overview}</p>
        </>
      )}
      {releaseDate && (
        <div className='release description-title'>
          Release: <span className='release-value'>{releaseDate}</span>
        </div>
      )}
      {runtime && <div className='description-title'>Runtime: {runtime}m</div>}
      <Genres genres={genres} />
    </div>
  );
};
export default MovieDescription;
