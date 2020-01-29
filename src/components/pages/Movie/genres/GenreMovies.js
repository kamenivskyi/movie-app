import React, { useEffect, useContext } from 'react';
import MovieContext from '../../../../context/movie/movieContext';
import MediaItems from '../../../MediaItems';

const GenreMovies = ({ match }) => {
  const { genreMovies, getGenreMovies } = useContext(MovieContext);

  useEffect(() => {
    let isCurrent = true;
    if (isCurrent) {
      getGenreMovies(match.params.id);
    }
    return () => (isCurrent = false);
  }, [match.params.id]);
  console.log(genreMovies);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <MediaItems items={genreMovies} />
      </div>
    </div>
  );
};
export default GenreMovies;
