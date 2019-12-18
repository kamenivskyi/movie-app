import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import MovieContext from '../../../context/movie/movieContext';

const Search = () => {
  const [name, setName] = useState('');
  const [redirect, setRedirect] = useState(false);

  const movieContext = useContext(MovieContext);
  const { searchMovies } = movieContext;

  const handleSubmit = async e => {
    e.preventDefault();
    if (name.trim()) {
      setRedirect(true);
      searchMovies(name);
    }
  };

  const handleChange = e => setName(e.target.value);
  return (
    <>
      <form className='form-inline my-2 my-lg-0' onSubmit={handleSubmit}>
        <input
          className='form-control mr-sm-2'
          type='search'
          placeholder='Search movie'
          aria-label='Search'
          onChange={handleChange}
        />
        <button className='btn btn-outline-dark my-2 my-sm-0' type='submit'>
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
