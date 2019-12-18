import React, { useEffect, useContext } from 'react';
import MovieItem from './MovieItem';
import MovieTabs from './layout/MovieTabs';
import MovieContext from '../context/movie/movieContext';
import Banner from './pages/Banner';

const Movies = () => {
  const movieContext = useContext(MovieContext);
  const { movies, getTrending } = movieContext;

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <React.Fragment>
      <Banner data={movies} />
      <div className='container-fluid mt-3'>
        <div className='row'>
          <MovieTabs />
          <MovieItem movies={movies} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Movies;
