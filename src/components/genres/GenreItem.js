import React from 'react';
import { Link } from 'react-router-dom';

const GenreItem = ({ genre: { name, id } }) => {
  return (
    <li>
      <Link to={`/genre/${id}`} type='button' className='btn btn-danger'>
        {name}
      </Link>
    </li>
  );
};
export default GenreItem;
