import React, { useState, useContext, useEffect } from 'react';
import MovieContext from '../../../context/movie/movieContext';
// import MovieService from '../../../services/movie-service';
// import ReleaseYear from './ReleaseYear';
// import SortBy from './SortBy';
// import IncludeAdult from './IncludeAdult';
// import GenresList from './GenresList';
import './Filters.css';

const Filters = props => {
  // const service = new MovieService();
  // const movieContext = useContext(MovieContext);
  // const { filterMovies, getGenres } = movieContext;

  // const [sortBy, setSortBy] = useState('');
  // const [year, setYear] = useState(null);
  // const [includeAdult, setIncludeAdult] = useState(false);
  // const [genres, setGenres] = useState([]);

  // useEffect(() => {
  //   service.getGenreList().then(res => setGenres(res));
  // }, []);

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   filterMovies(sortBy, includeAdult, year);
  // };

  // const handleAdultCheck = e => setIncludeAdult(e.target.checked);
  // const handleSortBy = e => setSortBy(e.target.value);
  // const handleChangeYear = e => setYear(e.target.value);

  return (
    <div className='col-12'>
      <h2 className='filter-title'>Filters</h2>
      {props.children}
    </div>
  );
};

export default Filters;
