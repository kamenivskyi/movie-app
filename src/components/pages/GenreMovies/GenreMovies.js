import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getMoviesByGenre } from '../../../redux/media/mediaActions';

import MediaItems from '../../layout/MediaItems';

import './GenrePage.css';

const GenreMovies = ({ match, movies, getMoviesByGenre }) => {
  const { id } = match.params;

  useEffect(() => {
    let isCurrent = true;

    if (isCurrent) {
      getMoviesByGenre(id);
    }
    return () => (isCurrent = false);
  }, [id]);

  return (
    <section className='genre-page'>
      <div className='container-fluid'>
        <div className='row'>
          <MediaItems items={movies} type='movie' />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  movies: state.media.moviesByGenre
});

export default connect(mapStateToProps, { getMoviesByGenre })(GenreMovies);
