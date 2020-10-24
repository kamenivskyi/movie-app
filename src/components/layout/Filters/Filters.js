import React, { useState } from 'react';
import { connect } from 'react-redux';

// import PaginationWrapper from '../../layout/PaginationWrapper';
import ReleaseYear from './ReleaseYear';
import SortBy from './SortBy';
import IncludeAdult from './IncludeAdult';
import { Button } from '../../common/Button';

import { getMoviesByFilters } from '../../../redux/moviesByFilters/moviesByFIltersActions';

import './Filters.css';

const Filters = ({ 
  data, 
  getMoviesByFilters, 
  handleChange, 
  handlePageChange,
  setActivePage,
  setIncludeAdult,
  sortBy,
  year,
  includeAdult 
}) => {
  console.log('sortBy', sortBy)
  // const [state, setState] = useState({
  //   year: null,
  //   sortBy: ''
  // });
  // const [includeAdult, setIncludeAdult] = useState(false);
  // const [activePage, setActivePage] = useState(1);

  // const { total_results, total_pages } = data;
  // const { year, sortBy } = state;

  const handleSubmit = e => {
    e.preventDefault();
    console.log(sortBy)
    setActivePage(1);
    getMoviesByFilters(1, sortBy, includeAdult, year);
  };

  // const handleChange = ({ target: { value, name}}) => {
  //   setState({ ...state, [name]: value});
  // }

  // const handlePageChange = pageNumber => {
  //   setActivePage(pageNumber);
  //   getMoviesByFilters(pageNumber, sortBy, includeAdult, year);
  // };

  return (
    // <div className='row'>
      <div className='col-12'>
        <h2 className='section-title'>Filters</h2>
        <form className='form-inline filters' onSubmit={handleSubmit}>
          <IncludeAdult
            onChange={({ target }) => setIncludeAdult(target.checked)}
            value={includeAdult}
          />
          <ReleaseYear
            onChange={handleChange}
            name='year'
            value={year}
          />
          <SortBy
            onChange={handleChange}
            name='sortBy'
            value={sortBy}
          />
          <Button className='btn btn-primary submit-btn' type='submit'>
            Search
          </Button>
        </form>
      </div>
  );

      {/* {children} */}

      {/* <PaginationWrapper
        currentPage={activePage}
        totalItems={total_results}
        onChange={handlePageChange}
        totalPages={total_pages}
      /> */}
    {/* </div> */}
};

// const mapStateToProps = state => ({
//   data: state.moviesByFilters.movies
// });

export default connect(null, { getMoviesByFilters })(Filters);
// export default Filters;