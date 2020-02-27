import React, { useContext, useState } from 'react';

import MovieContext from '../../../context/movie/movieContext';

import PaginationWrapper from '../../layout/PaginationWrapper';
import ReleaseYear from './ReleaseYear';
import SortBy from './SortBy';
import IncludeAdult from './IncludeAdult';
import { Button } from '../../proxy/Button';

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

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
    filterMovies(pageNumber, sortBy, includeAdult, year);
  };

  return (
    <div className='row'>
      <div className='col-12'>
        <h2 className='section-title'>Filters</h2>
        <form className='form-inline filters' onSubmit={handleSubmit}>
          <IncludeAdult
            onChange={({ target }) => setIncludeAdult(target.checked)}
            value={includeAdult}
          />
          <ReleaseYear
            onChange={({ target }) => setYear(target.value)}
            value={year}
          />
          <SortBy
            onChange={({ target }) => setSortBy(target.value)}
            value={sortBy}
          />
          <Button className='btn btn-outline-dark submit-btn' type='submit'>
            Search
          </Button>
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
