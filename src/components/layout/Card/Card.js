import React from 'react';
import Flip from 'react-reveal/Flip';

const Card = ({ children }) => {
  return (
    <Flip left cascade>
      <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
        <div className='card'>{children}</div>
      </div>
    </Flip>
  );
};
export default Card;
