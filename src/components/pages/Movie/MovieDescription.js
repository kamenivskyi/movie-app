import React from 'react';
import Genres from '../../layout/genres/Genres';
import { calcTime } from '../../../helpers';

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
      {runtime && (
        <div className='description-title'>
          <i className='far fa-clock'></i> &nbsp;
          <span className='font-weight-bold'>Runtime: </span>
          {calcTime(runtime)}
        </div>
      )}
      <Genres genres={genres} />
    </div>
  );
};
export default MovieDescription;
