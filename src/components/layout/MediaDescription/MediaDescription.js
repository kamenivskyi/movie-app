import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import Genres from '../genres/Genres';

import { calcTime } from '../../../utils/helpers';

const MediaDescription = ({ overview, releaseDate, genres, runtime }) => {
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
          <FontAwesomeIcon icon={faClock} /> &nbsp;
          <span className='font-weight-bold'>Runtime: </span>
          {calcTime(runtime)}
        </div>
      )}
      <Genres genres={genres} />
    </div>
  );
};
export default MediaDescription;
