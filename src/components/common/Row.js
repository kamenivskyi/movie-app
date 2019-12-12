import React from 'react';

const Row = ({ left, right }) => {
  return (
    <div className='row'>
      <div className='col-md-3'>{left}</div>
      <div className='col-md-9'>{right}</div>
    </div>
  );
};
export default Row;
