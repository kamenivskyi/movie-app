import React from 'react';
// import Flip from 'react-reveal/Flip';

const CardWrapper = ({ children }) => (
  // <Flip left cascade>
  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
    <div className='card-item text-white bg-primary'>{children}</div>
  </div>
  // </Flip>
);
export default CardWrapper;
