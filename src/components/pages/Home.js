import React, { useContext, useState } from 'react';
import Pagination from 'react-js-pagination';
import Movies from '../Movies';
import Banner from '../layout/Banner';
import Filters from '../layout/Filters';

import ReleaseYear from '../layout/Filters/ReleaseYear';
import SortBy from '../layout/Filters/SortBy';
import IncludeAdult from '../layout/Filters/IncludeAdult';
import MovieContext from '../../context/movie/movieContext';

const Home = () => {
  const movieContext = useContext(MovieContext);
  const { filterMovies, getGenres } = movieContext;

  const [sortBy, setSortBy] = useState('');
  const [year, setYear] = useState(null);
  const [includeAdult, setIncludeAdult] = useState(false);
  const [activePage, setActivePage] = useState(1);

  const { page, total_results, results } = movieContext.movies;

  const handleSubmit = async e => {
    e.preventDefault();
    setActivePage(1);
    filterMovies(1, sortBy, includeAdult, year);
  };

  const handleAdultCheck = e => setIncludeAdult(e.target.checked);

  const handleSortBy = e => setSortBy(e.target.value);

  const handleChangeYear = e => setYear(e.target.value);

  const handlePageChange = activePage => {
    setActivePage(activePage);
    console.log(activePage);
    filterMovies(activePage, sortBy, includeAdult, year);
  };

  return (
    <React.Fragment>
      <Banner />
      <div className='container-fluid mt-3'>
        <div className='row'>
          <Filters>
            <form className='form-inline filters' onSubmit={handleSubmit}>
              <IncludeAdult onChange={handleAdultCheck} value={includeAdult} />
              <ReleaseYear onChange={handleChangeYear} value={year} />
              <SortBy onChange={handleSortBy} value={sortBy} />
              {/* <GenresList data={genres} /> */}
              <button className='btn btn-outline-dark my-2' type='submit'>
                Search
              </button>
            </form>
          </Filters>

          <Movies />
          <div className='pagination-container'>
            {results && (
              <Pagination
                activePage={activePage}
                itemsCountPerPage={20}
                totalItemsCount={total_results}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                itemClass={'page-item'}
                linkClass={'page-link'}
                prevPageText={`Prev`}
                nextPageText={`Next`}
                firstPageText={`First`}
                lastPageText={`Last`}
              />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
