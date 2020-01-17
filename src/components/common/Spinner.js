import React from 'react';
import spinner from './spinner.svg';

const Spinner = () => {
  return (
    <div style={{ margin: '30px auto', textAlign: 'center' }}>
      <img src={spinner} className='text-center' alt='Spinner' />
    </div>
  );
};
export default Spinner;
