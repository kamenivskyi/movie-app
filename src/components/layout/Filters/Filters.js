import React from 'react';
import './Filters.css';

const Filters = ({ onSubmit, children }) => {
  return (
    <div className='col-12'>
      <h2 className='section-title'>Filters</h2>
      <form className='form-inline filters' onSubmit={onSubmit}>
        {children}
        <button className='btn btn-outline-dark submit-btn' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Filters;
