import React, { Fragment } from 'react';
import withSpinner from '../../../hoc-helpers/withSpinner';
import GenreItem from './GenreItem';
import './Genres.css';

const Genres = ({ genres }) => {
  return (
    <>
      {genres && (
        <Fragment>
          <h5 className='genres-title'>Genres: </h5>
          <ul className='genres'>
            {genres.map(genre => (
              <GenreItem genre={genre} key={genre.id} />
            ))}
          </ul>
        </Fragment>
      )}
    </>
  );
};
export default withSpinner(Genres);
