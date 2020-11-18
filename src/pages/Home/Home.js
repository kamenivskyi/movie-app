import React from "react";

import MoviesByFilters from "../../containers/MoviesByFilters";
import Banner from "../../containers/Banner";
import Filters from "../../containers/Filters";
import HomePagination from "../../containers/Filters/HomePagination";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <Filters />
          <MoviesByFilters />
          <HomePagination />
        </div>
      </div>
    </>
  );
};

export default Home;
