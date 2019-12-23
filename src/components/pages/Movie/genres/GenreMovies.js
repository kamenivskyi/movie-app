import React, { useEffect, useContext } from 'react';
import MovieContext from '../../../../context/movie/movieContext';
import MovieItem from '../../../MovieItem';

const GenreMovies = ({ match }) => {
  const movieContext = useContext(MovieContext);
  const { genreMovies, getGenreMovies } = movieContext;

  useEffect(() => {
    let cancelled = false;
    if (!cancelled) {
      getGenreMovies(match.params.id);
    }
    return () => (cancelled = true);
  }, [match.params.id]);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <MovieItem movies={genreMovies} />
      </div>
    </div>
  );
};
export default GenreMovies;
