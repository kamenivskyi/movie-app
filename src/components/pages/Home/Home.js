import React from 'react';

import Movies from '../../layout/Movies';
import Banner from '../../layout/Banner';
import Filters from '../../layout/Filters';

const Home = () => (
  <>
    <Banner />
    <div className='container-fluid mt-3'>
      <Filters>
        <Movies />
      </Filters>
    </div>
  </>
);

export default Home;
