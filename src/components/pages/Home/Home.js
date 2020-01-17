import React, { Fragment } from 'react';
import Movies from '../../layout/Movies';
import Banner from '../../layout/Banner';
import Filters from '../../layout/Filters';

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <div className='container-fluid mt-3'>
        <Filters>
          <Movies />
        </Filters>
      </div>
    </Fragment>
  );
};
export default Home;
