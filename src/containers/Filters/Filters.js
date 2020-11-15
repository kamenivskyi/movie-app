import React from "react";
import { useDispatch } from "react-redux";

import ReleaseYear from "./ReleaseYear";
import SortBy from "./SortBy";
import IncludeAdult from "./IncludeAdult";
import Button from "../../components/Button";

import { getMoviesByFilters } from "../../redux/moviesByFilters/moviesByFIltersActions";

import "./Filters.css";

const Filters = ({
  onChangeYear,
  onChangeSort,
  onPageChange,
  setActivePage,
  onChangeAdult,
  sortBy,
  year,
  includeAdult,
}) => {
  console.log("sortBy", sortBy);
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
        <IncludeAdult onChange={onChangeAdult} value={includeAdult} />
        <ReleaseYear onChange={onChangeYear} name="year" value={year} />
        <SortBy onChange={onChangeSort} name="sortBy" value={sortBy} />
        <Button className="btn btn-primary submit-btn" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Filters;
