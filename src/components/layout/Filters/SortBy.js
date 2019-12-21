import React from 'react';

const SortBy = ({ onChange, value, options }) => {
  return (
    <select className='form-control mx-2' value={value} onChange={onChange}>
      <option value=''>Select sort</option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

SortBy.defaultProps = {
  options: [
    {
      label: 'Popular descending',
      value: 'popularity.desc'
    },
    {
      label: 'Popular ascending',
      value: 'popularity.asc'
    },
    {
      label: 'Rating descending',
      value: 'vote_average.desc'
    },
    {
      label: 'Rating ascending',
      value: 'vote_average.asc'
    },
    {
      label: 'Revenue descending',
      value: 'revenue.desc'
    },
    {
      label: 'Revenue ascending',
      value: 'revenue.asc'
    }
  ]
};

export default SortBy;
