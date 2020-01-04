import React from 'react';
import { convertMoney } from '../../../helpers';

const Finances = ({ revenue, budget }) => {
  return (
    <div className='finances'>
      <div className='budget'>
        <i className='fas fa-coins'></i> Budget: {convertMoney(budget)}
      </div>
      <div className='revenue'>
        <i className='fas fa-hand-holding-usd'></i> Revenue:{' '}
        {convertMoney(revenue)}
      </div>
    </div>
  );
};
export default Finances;
