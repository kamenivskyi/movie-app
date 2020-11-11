import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getMoviesByGenre } from '../../../redux/moviesByGenre/moviesByGenreActions';

import MediaItems from '../../layout/MediaItems';

import './GenrePage.css';

const GenreMovies = () => {
  const movies = useSelector((state) => state.moviesByGenre.movies);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    let isCurrent = true;

    if (isCurrent) {
      dispatch(getMoviesByGenre(id));
    }
    return () => (isCurrent = false);
  }, [id]);

  return (
    <section className='genre-page'>
      <div className='container'>
        <div className='row'>
          <MediaItems items={movies} type='movie' />
        </div>
      </div>
    </section>
  );
};

export default GenreMovies;
