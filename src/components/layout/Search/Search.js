import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Search.css';

const Search = () => {
  const [value, setValue] = useState('');
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    if (value.trim()) {
      history.push(`/results/${value}/1`);
      setValue('');
    }
  };

  const onChange = ({ target }) => setValue(target.value);

  return (
    <form
      className='form-inline navbar-item my-sm-2 my-lg-0'
      onSubmit={onSubmit}
    >
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

export default Search;
