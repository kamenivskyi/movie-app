import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import ReleaseYear from "./ReleaseYear";
import SortBy from "./SortBy";
import IncludeAdult from "./IncludeAdult";
import Button from "../../components/Button";

import { getMoviesByFilters } from "../../redux/moviesByFilters/moviesByFIltersActions";
import homeContext from "../../context/homePage/homeContext";

import "./Filters.css";

const Filters = () => {
  const {
    handleChangeYear,
    handleChangeSort,
    setActivePage,
    handleChangeAdult,
    sortBy,
    year,
    includeAdult,
  } = useContext(homeContext);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setActivePage(1);
    dispatch(getMoviesByFilters(1, sortBy, includeAdult, year));
  };

  return (
    <div className="col-12">
      <h2 className="section-title">Filters</h2>
      <form className="form-inline filters" onSubmit={handleSubmit}>
        <IncludeAdult onChange={handleChangeAdult} value={includeAdult} />
        <ReleaseYear onChange={handleChangeYear} name="year" value={year} />
        <SortBy onChange={handleChangeSort} name="sortBy" value={sortBy} />
        <Button className="btn btn-primary submit-btn" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Filters;
