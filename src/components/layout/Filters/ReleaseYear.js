import React from 'react';

const ReleaseYear = ({ onChange, year }) => {
  const getYear = () => {
    const options = [];
    for (let i = 2019; i >= 1990; i--) {
      options.push(i);
    }
    return options;
  };
  const years = getYear();

  return (
    <div className='form-group year'>
      <label>
        Release year: &nbsp;
        <select className='form-control' value={year} onChange={onChange}>
          <option>Choose a year</option>
          {years.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
export default ReleaseYear;
