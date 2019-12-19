import React, { useState, useContext, useEffect } from 'react';
import MovieContext from '../../../context/movie/movieContext';
import MovieService from '../../../services/movie-service';
import ReleaseYear from './ReleaseYear';
import SortBy from './SortBy';
import IncludeAdult from './IncludeAdult';
// import GenresList from './GenresList';
import './Filters.css';

const Filters = () => {
  // const service = new MovieService();
  const movieContext = useContext(MovieContext);
  const { searchMovies, getGenres } = movieContext;

  const [sortBy, setSortBy] = useState('');
  const [year, setYear] = useState(null);
  const [includeAdult, setIncludeAdult] = useState(false);
  // const [genres, setGenres] = useState([]);

  // useEffect(() => {
  //   service.getGenreList().then(res => setGenres(res));
  // }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    searchMovies(sortBy, includeAdult, year);
  };

  const handleAdultCheck = e => setIncludeAdult(e.target.checked);
  const handleSortBy = e => setSortBy(e.target.value);
  const handleChangeYear = e => setYear(e.target.value);

  return (
    <div className='col-12'>
      <form className='form-inline filters' onSubmit={handleSubmit}>
        <IncludeAdult onChange={handleAdultCheck} value={includeAdult} />
        <ReleaseYear onChange={handleChangeYear} value={year} />
        <SortBy onChange={handleSortBy} value={sortBy} />
        {/* <GenresList data={genres} /> */}
        <button className='btn btn-outline-dark my-2' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Filters;
