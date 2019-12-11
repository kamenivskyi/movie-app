import React, { useEffect, useState, useContext } from 'react';
import MovieContext from '../../context/movie/movieContext';
import MovieItem from '../MovieItem';

const GenreMovies = ({ match }) => {
  const [movies, setMovies] = useState([]);
  const movieContext = useContext(MovieContext);

  useEffect(() => {
    movieContext.getGenreMovies(match.params.id).then(res => console.log(res));
  }, []);

  return <div>Genre movies</div>;
};
export default GenreMovies;
