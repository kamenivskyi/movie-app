import React, { useContext, useState } from 'react';
import ResultsContext from '../../../context/results/resultsContext';

const Search = props => {
  const resultsContext = useContext(ResultsContext);
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (value.trim()) {
      resultsContext.searchMovies(value, 1);
      props.history.push(`/results/${value}`);
    }
  };

  const onChange = ({ target }) => setValue(target.value);

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
