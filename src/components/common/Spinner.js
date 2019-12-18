import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={spinner} className='text-center' alt='Spinner' />
    </div>
  );
};
export default Spinner;
