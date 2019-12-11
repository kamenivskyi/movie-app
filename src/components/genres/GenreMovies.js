import React, { useEffect, useContext } from 'react';
import MovieContext from '../../context/movie/movieContext';
import MovieItem from '../MovieItem';

const GenreMovies = props => {
  const movieContext = useContext(MovieContext);
  const { genreMovies, getGenreMovies } = movieContext;

  useEffect(() => {
    getGenreMovies(props.match.params.id);
  }, []);

  return (
    <div className='row'>
      <MovieItem movies={genreMovies} />
    </div>
  );
};
export default GenreMovies;
