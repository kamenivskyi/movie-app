import React from 'react';
import spinner from './spinner.svg';

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={spinner} className='text-center' alt='Spinner' />
    </div>
  );
};
export default Spinner;
