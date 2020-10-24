import React, { useState } from 'react';
import { connect } from 'react-redux';

import Movies from '../../layout/Movies';
import Banner from '../../layout/Banner';
import Filters from '../../layout/Filters';
import PaginationWrapper from '../../layout/PaginationWrapper';
// import ReleaseYear from '../../ReleaseYear';
// import SortBy from './SortBy';
// import IncludeAdult from './IncludeAdult';
// import { Button } from '../Button';

import { getMoviesByFilters } from '../../../redux/moviesByFilters/moviesByFIltersActions';

const Home = ({ data, getMoviesByFilters }) => {
  const [state, setState] = useState({
    year: '',
    sortBy: '',
  });
  const [includeAdult, setIncludeAdult] = useState(false);
  const [activePage, setActivePage] = useState(1);

  const { total_results, total_pages } = data;
  const { year, sortBy } = state;

  // console.log(getMoviesByFilters);

  const handleChange = ({ target: { value, name}}) => {
    setState({ ...state, [name]: value});
  }

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
    getMoviesByFilters(pageNumber, sortBy, includeAdult, year);
  };

  return (
    <>
      <Banner />
      <div className='container' style={{ marginTop: '20px' }}>
        <div className='row'>
          <Filters 
            handleChange={handleChange} 
            handlePageChange={handlePageChange}
            setActivePage={setActivePage}
            setIncludeAdult={setIncludeAdult}
            includeAdult={includeAdult}
            sortBy={state.sortBy}
            year={year}
          />
          <Movies />
          <PaginationWrapper
            currentPage={activePage}
            totalItems={total_results}
            onChange={handlePageChange}
            totalPages={total_pages}
          />
        </div>
        {/* </Filters> */}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  data: state.moviesByFilters.movies
});

export default connect(mapStateToProps, { getMoviesByFilters })(Home);
