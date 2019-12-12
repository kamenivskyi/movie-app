import React from 'react';

const Finances = ({ revenue, budget }) => {
  return (
    <div className='finances'>
      <div className='budget'>
        <i className='fas fa-coins'></i> Budget: &#36;{budget}
      </div>
      <div className='revenue'>
        <i className='fas fa-hand-holding-usd'></i> Revenue: &#36;{revenue}
      </div>
    </div>
  );
};
export default Finances;
