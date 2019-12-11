import React, { useContext, useEffect } from 'react';
import MovieContext from '../../../context/movie/movieContext';
import Genres from '../../genres/Genres';
import './Movie.css';

const Movie = ({ match }) => {
  const movieContext = useContext(MovieContext);
  const { getMovie, movie } = movieContext;
  useEffect(() => {
    getMovie(match.params.id);
  }, []);
  return <MovieView data={movie} />;
};

const MovieView = ({ data }) => {
  const { title, id, poster_path, backdrop_path, overview, genres } = data;
  console.log(data);
  const bgImage = `https://image.tmdb.org/t/p/w1280${backdrop_path}`;
  const image = `https://image.tmdb.org/t/p/w500${poster_path}`;
  // console.log(genreArray);

  return (
    <div
      className='movie card mb-3'
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      <div
        className='row no-gutters '
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <div className='col-md-4'>
          <img src={image} className='card-img' alt='...' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h3 className='card-title text-primary'>{title}</h3>
            <p className='card-text'>{overview}</p>
            <Genres genres={genres} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
