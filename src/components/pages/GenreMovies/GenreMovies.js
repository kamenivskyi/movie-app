import React, { useEffect, useContext } from 'react';
import MovieContext from '../../../context/movie/movieContext';
import MediaItems from '../../layout/MediaItems';

import './GenrePage.css';

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
    <section className='genre-page'>
      <div className='container-fluid'>
        <div className='row'>
          <MediaItems items={genreMovies} type='movie' />
        </div>
      </div>
    </section>
  );
};
export default GenreMovies;
