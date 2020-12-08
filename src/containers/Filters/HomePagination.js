import React, { useContext } from "react";
import { useSelector } from "react-redux";

import PaginationWrapper from "../../components/PaginationWrapper";
import homeContext from "../../context/homePage/homeContext";

const HomePagination = () => {
  const { activePage, handlePageChange } = useContext(homeContext);
  const { total_results, total_pages } = useSelector(
    (state) => state.moviesByFilters.movies
  );

  return (
    <PaginationWrapper
      activePage={Number(activePage)}
      totalItems={total_results}
      totalPages={total_pages}
      onChange={handlePageChange}
    />
  );
};

export default React.memo(HomePagination);
