import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import ResultsContext from '../../../context/results/resultsContext';
import './Search.css';

const Search = ({ history }) => {
  const { searchMovies } = useContext(ResultsContext);
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (value.trim()) {
      searchMovies(value, 1);
      history.push(`/results/${value}`);
    }
  };

  const onChange = ({ target }) => setValue(target.value);

  return (
    <form className='form-inline navbar-item' onSubmit={onSubmit}>
      <input
        className='form-control search'
        type='search'
        placeholder='Enter something'
        aria-label='Search'
        value={value}
        onChange={onChange}
      />
    </form>
  );
};
export default withRouter(Search);
