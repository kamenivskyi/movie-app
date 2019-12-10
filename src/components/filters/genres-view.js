import React from 'react';
import PropTypes from 'prop-types';

const GenresView = ({ genres }) => {
  return (
    <ul className='text-left'>
      {genres.map(({ name, id }) => {
        return (
          <li className='form-check' key={id}>
            <input
              className='form-check-input'
              type='checkbox'
              id={`check${id}`}
            />
            <label className='form-check-label' htmlFor={`check${id}`}>
              {name}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

GenresView.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object)
};
export default GenresView;
