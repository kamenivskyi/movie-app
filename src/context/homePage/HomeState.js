import React from "react";
import { useDispatch } from "react-redux";

import { useStorage } from "../../hooks";
import { getMoviesByFilters } from "../../redux/moviesByFilters/moviesByFIltersActions";
import HomeContext from "./homeContext";

const HomeProvider = ({ children }) => {
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
  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    dispatch(getMoviesByFilters(pageNumber, sortBy, includeAdult, year));
  };

  const handleChangeYear = (e) => setYear(e.target.value);
  const handleChangeSort = (e) => setSortBy(e.target.value);
  const handleChangeAdult = (e) => setIncludeAdult(e.target.checked);

  return (
    <HomeContext.Provider
      value={{
        year,
        sortBy,
        includeAdult,
        activePage,
        setActivePage,
        handlePageChange,
        handleChangeYear,
        handleChangeSort,
        handleChangeAdult,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
