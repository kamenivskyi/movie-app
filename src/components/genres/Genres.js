import React, { Fragment } from 'react';
import withSpinner from '../hoc-helpers/withSpinner';
import GenreItem from './GenreItem';
import './Genres.css';

const Genres = ({ genres }) => {
  return (
    <div>
      {genres && (
        <Fragment>
          <h5>Genres: </h5>
          <ul className='genres'>
            {genres.map(genre => (
              <GenreItem genre={genre} key={genre.id} />
            ))}
          </ul>
        </Fragment>
      )}
    </div>
  );
};
export default withSpinner(Genres);
