import React from 'react';

import { ReactComponent as Rotate } from './spinner.svg';

const Spinner = () => (
  <div style={{ margin: '30px auto', textAlign: 'center' }}>
    <Rotate className='text-center' />
  </div>
);

export default Spinner;
