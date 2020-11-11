import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MediaItems from "../../layout/MediaItems";
import PaginationWrapper from "../../layout/PaginationWrapper";
import Spinner from "../../layout/Spinner";

import { searchItems } from "../../../redux/search/searchActions";

const Results = () => {
  const { data, loading } = useSelector(({ search }) => ({
    data: search.items,
    loading: search.loading,
  }));
  const dispatch = useDispatch();
  const { query, page } = useParams();
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const { results, total_results, total_pages } = data;

  useEffect(() => {
    setCurrentPage(page);
    dispatch(searchItems(query, currentPage));
  }, [query, currentPage]);

  if (!data) return null;

  const handlePageChange = (activePage) => {
    setCurrentPage(activePage);

    history.push(`/results/${query}/${activePage}`);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container-fluid pt-3">
      <h2 className="section-title">Results</h2>
      {total_results > 0 ? (
        <div className="container">
          <div className="row">
            <MediaItems items={results} type="movie" />

            <PaginationWrapper
              currentPage={Number(currentPage)}
              totalItems={total_results}
              totalPages={total_pages}
              onChange={handlePageChange}
            />
          </div>
        </div>
      ) : (
        <p className="text-center">No {query} found on request</p>
      )}
    </div>
  );
};

export default Results;
