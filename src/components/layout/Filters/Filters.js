import React, { useContext, useState } from 'react';
import ReleaseYear from './ReleaseYear';
import SortBy from './SortBy';
import IncludeAdult from './IncludeAdult';
import MovieContext from '../../../context/movie/movieContext';
import PaginationWrapper from '../../layout/PaginationWrapper';
import './Filters.css';

const Filters = ({ children }) => {
  const [sortBy, setSortBy] = useState('');
  const [year, setYear] = useState(null);
  const [includeAdult, setIncludeAdult] = useState(false);
  const [activePage, setActivePage] = useState(1);

  const { filterMovies, movies } = useContext(MovieContext);
  const { total_results, total_pages } = movies;

  const handleSubmit = async e => {
    e.preventDefault();
    setActivePage(1);
    filterMovies(1, sortBy, includeAdult, year);
  };

  const handleAdultCheck = e => setIncludeAdult(e.target.checked);
  const handleSortBy = e => setSortBy(e.target.value);
  const handleChangeYear = e => setYear(e.target.value);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
    filterMovies(pageNumber, sortBy, includeAdult, year);
  };

  return (
    <div className='row'>
      <div className='col-12'>
        <h2 className='section-title'>Filters</h2>
        <form className='form-inline filters' onSubmit={handleSubmit}>
          <IncludeAdult onChange={handleAdultCheck} value={includeAdult} />
          <ReleaseYear onChange={handleChangeYear} value={year} />
          <SortBy onChange={handleSortBy} value={sortBy} />
          <button className='btn btn-outline-dark submit-btn' type='submit'>
            Search
          </button>
        </form>
      </div>
      {children}
      <PaginationWrapper
        currentPage={activePage}
        totalItems={total_results}
        onChange={handlePageChange}
        totalPages={total_pages}
      />
    </div>
  );
};

export default Filters;
