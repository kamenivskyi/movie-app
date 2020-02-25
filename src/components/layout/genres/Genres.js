import React from 'react';

import GenreItem from './GenreItem';

import './Genres.css';

const Genres = ({ genres }) => (
  <>
    {genres && (
      <>
        <h5 className='genres-title'>Genres: </h5>
        <ul className='genres'>
          {genres.map(genre => (
            <GenreItem genre={genre} key={genre.id} />
          ))}
        </ul>
      </>
    )}
  </>
);

export default Genres;
