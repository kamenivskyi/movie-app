import React from 'react';
import Movies from '../Movies';
import Banner from './Banner';
import Filters from '../layout/Filters';

const Home = () => {
  return (
    <>
      <Banner />
      <div className='container-fluid mt-3'>
        <div className='row'>
          <Filters />
          <Movies />
        </div>
      </div>
    </>
  );
};
export default Home;
