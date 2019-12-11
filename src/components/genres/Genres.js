import React from 'react';
import GenreItem from './GenreItem';
import './Genres.css';

const Genres = ({ genres }) => {
  return (
    <div>
      <h5>Genres: </h5>
      <ul className='genres'>
        {genres &&
          genres.map(genre => <GenreItem genre={genre} key={genre.id} />)}
      </ul>
    </div>
  );
};
export default Genres;
