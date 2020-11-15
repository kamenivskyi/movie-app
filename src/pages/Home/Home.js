import React from "react";
import { useDispatch, useSelector } from "react-redux";

import MoviesByFilters from "../../containers/MoviesByFilters";
import Banner from "../../containers/Banner";
import Filters from "../../containers/Filters";
import PaginationWrapper from "../../components/PaginationWrapper";

import { getMoviesByFilters } from "../../redux/moviesByFilters/moviesByFIltersActions";
import { useStorage } from "../../hooks";

const Home = () => {
  const [year, setYear] = useStorage({
    key: "year",
    initialValue: "",
    storageType: "sessionStorage",
  });
  const [sortBy, setSortBy] = useStorage({
    key: "sortBy",
    initialValue: "",
    storageType: "sessionStorage",
  });
  const [includeAdult, setIncludeAdult] = useStorage({
    key: "includeAdult",
    initialValue: false,
    storageType: "sessionStorage",
  });
  const [activePage, setActivePage] = useStorage({
    key: "activePage",
    initialValue: 1,
    storageType: "sessionStorage",
  });
  const { total_results, total_pages } = useSelector(
    (state) => state.moviesByFilters.movies
  );
  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    dispatch(getMoviesByFilters(pageNumber, sortBy, includeAdult, year));
  };

  const handleChangeYear = ({ target: { value } }) => setYear(value);
  const handleChangeSort = ({ target: { value } }) => setSortBy(value);
  const handleChangeAdult = ({ target: { checked } }) =>
    setIncludeAdult(checked);

  return (
    <>
      <Banner />
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <Filters
            onChangeYear={handleChangeYear}
            onChangeSort={handleChangeSort}
            onChangeAdult={handleChangeAdult}
            onPageChange={handlePageChange}
            setActivePage={setActivePage}
            includeAdult={includeAdult}
            sortBy={sortBy}
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
      </div>
    </>
  );
};

export default Home;
