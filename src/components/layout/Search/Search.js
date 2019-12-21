import React, { useContext, useState } from 'react';
import MovieContext from '../../../context/movie/movieContext';

const Search = props => {
  const movieContext = useContext(MovieContext);
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    movieContext.searchMovies(1, value);
    props.history.push('/');
  };
  const onChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <form className='form-inline' onSubmit={onSubmit}>
      <input
        className='form-control mr-sm-2'
        type='search'
        placeholder='typing something'
        aria-label='Search'
        value={value}
        onChange={onChange}
      />
      <button className='btn btn-outline-dark' type='submit'>
        Search
      </button>
    </form>
  );
};
export default Search;
