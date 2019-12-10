import React, { useEffect } from 'react';
import Filters from '../filters/filters';
import Movies from '../Movies';
import Row from '../Row';

const Home = () => {
  // useEffect(() => {

  // })
  return (
    <div>
      <Row left={<Filters />} right={<Movies />} />
    </div>
  );
};
export default Home;
