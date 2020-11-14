import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MoviesByFilters from "../../containers/MoviesByFilters";
import Banner from "../../containers/Banner";
import Filters from "../../containers/Filters";
import PaginationWrapper from "../../components/PaginationWrapper";

import { getMoviesByFilters } from "../../redux/moviesByFilters/moviesByFIltersActions";

const Home = () => {
  const [state, setState] = useState({
    year: "",
    sortBy: "",
  });
  const [includeAdult, setIncludeAdult] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const { total_results, total_pages } = useSelector(
    (state) => state.moviesByFilters.movies
  );
  const dispatch = useDispatch();

  const { year, sortBy } = state;

  const handleChange = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    dispatch(getMoviesByFilters(pageNumber, sortBy, includeAdult, year));
  };

  return (
    <>
      <Banner />
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <Filters
            handleChange={handleChange}
            handlePageChange={handlePageChange}
            setActivePage={setActivePage}
            setIncludeAdult={setIncludeAdult}
            includeAdult={includeAdult}
            sortBy={state.sortBy}
            year={year}
          />
          <MoviesByFilters />
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
};

export default Home;
