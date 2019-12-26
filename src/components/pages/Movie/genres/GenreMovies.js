import React, { useEffect, useContext } from 'react';
import MovieContext from '../../../../context/movie/movieContext';
import MediaItem from '../../../MediaItem';

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
  console.log(genreMovies);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <MediaItem items={genreMovies} />
      </div>
    </div>
  );
};
export default GenreMovies;
