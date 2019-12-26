import React, { useContext, useState } from 'react';
import ResultsContext from '../../../context/results/resultsContext';
import './Search.css';

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
    <form className='form-inline navbar-item' onSubmit={onSubmit}>
      <input
        className='form-control search'
        type='search'
        placeholder='typing something'
        aria-label='Search'
        value={value}
        onChange={onChange}
      />
    </form>
  );
};
export default Search;
