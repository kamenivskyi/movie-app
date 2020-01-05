import React from 'react';

const ReleaseYear = ({ onChange, year }) => {
  const getYears = () => {
    const options = [];
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1990; i--) {
      options.push(i);
    }
    return options;
  };
  const years = getYears();

  return (
    <div className='form-group year'>
      <label>
        Release year: &nbsp;
        <select className='form-control' value={year} onChange={onChange}>
          <option value=''>--Choose a year--</option>
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
