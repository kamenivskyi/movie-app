import React, { useEffect } from 'react';
import MovieService from '../../../services/movie-service';

const People = () => {
  const { getPopularPeople } = new MovieService();
  useEffect(() => {
    getPopularPeople().then(res => console.log(res));
  }, []);
  return <div>People</div>;
};
export default People;
