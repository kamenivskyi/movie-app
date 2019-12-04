import React from 'react';

const Row = ({ left, right }) => {
  return (
    <div className='row py-4'>
      <div className='col-3'>{left}</div>
      <div className='col-9'>{right}</div>
    </div>
  );
};
export default Row;
