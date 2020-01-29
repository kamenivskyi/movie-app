import React, { useContext, useState, useEffect } from 'react';
import MediaItems from '../../MediaItems';
import ResultsContext from '../../../context/results/resultsContext';
import PaginationWrapper from '../../layout/PaginationWrapper';

const Results = ({ match }) => {
  const [page, setPage] = useState(1);
  const { items, searchMovies } = useContext(ResultsContext);
  const { query } = match.params;
  const { results, total_results, total_pages } = items;

  useEffect(() => {
    setPage(1);
    searchMovies(query, page);
  }, [query]);

  const handlePageChange = activePage => {
    setPage(activePage);
    searchMovies(query, activePage);
  };

  if (total_results > 0) {
    return (
      <div className='container-fluid'>
        <h2 className='section-title'>Results:</h2>
        <div className='row'>
          <MediaItems items={results} type='movie' />
          <PaginationWrapper
            currentPage={page}
            totalItems={total_results}
            totalPages={total_pages}
            onChange={handlePageChange}
          />
        </div>
      </div>
    );
  } else return null;
};
export default Results;
