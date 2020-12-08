import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MediaItems from "../../components/MediaItems";
import PaginationWrapper from "../../components/PaginationWrapper";
import Spinner from "../../components/Spinner";
import { searchItems } from "../../redux/search/searchActions";

const Results = () => {
  const { data, loading } = useSelector(({ search }) => ({
    data: search.items,
    loading: search.loading,
  }));
  const dispatch = useDispatch();
  const { query, page } = useParams();
  const history = useHistory();
  const { results, total_results, total_pages } = data;

  useEffect(() => {
    dispatch(searchItems(query, page));
  }, [query, page]);

  if (!data) return null;

  const handlePageChange = (activePage) => {
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
              activePage={Number(page)}
              totalItems={Number(total_results)}
              totalPages={Number(total_pages)}
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
