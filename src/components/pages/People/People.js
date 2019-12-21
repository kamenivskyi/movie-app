import React, { useEffect } from 'react';
import MovieService from '../../../services/movie-service';

const People = () => {
  const service = new MovieService();
  useEffect(() => {
    service.getPopularPeople().then(res => console.log(res));
  }, []);
  return <div>People</div>;
};
export default People;
