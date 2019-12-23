import React, { useContext, useState } from 'react';
import Movies from '../../Movies';
import Banner from '../../layout/Banner';
import Filters from '../../layout/Filters';
import ReleaseYear from '../../layout/Filters/ReleaseYear';
import SortBy from '../../layout/Filters/SortBy';
import IncludeAdult from '../../layout/Filters/IncludeAdult';
import MovieContext from '../../../context/movie/movieContext';
import PaginationWrapper from '../../layout/PaginationWrapper';

const Home = () => {
  const movieContext = useContext(MovieContext);
  const { filterMovies } = movieContext;
  const { total_results, total_pages } = movieContext.movies;

  const [sortBy, setSortBy] = useState('');
  const [year, setYear] = useState(null);
  const [includeAdult, setIncludeAdult] = useState(false);
  const [activePage, setActivePage] = useState(1);

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
    <React.Fragment>
      <Banner />
      <div className='container-fluid mt-3'>
        <div className='row'>
          <Filters onSubmit={handleSubmit}>
            <IncludeAdult onChange={handleAdultCheck} value={includeAdult} />
            <ReleaseYear onChange={handleChangeYear} value={year} />
            <SortBy onChange={handleSortBy} value={sortBy} />
          </Filters>
          <Movies />
          <PaginationWrapper
            currentPage={activePage}
            totalItems={total_results}
            onChange={handlePageChange}
            totalPages={total_pages}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
