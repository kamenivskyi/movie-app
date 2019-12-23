import React from 'react';

const IncludeAdult = ({ value, onChange }) => {
  return (
    <div className='form-check'>
      <label className='form-check-label'>
        <input
          className='form-check-input'
          type='checkbox'
          value={value}
          checked={value}
          onChange={onChange}
        />{' '}
        Include adult?
      </label>
    </div>
  );
};
export default IncludeAdult;
