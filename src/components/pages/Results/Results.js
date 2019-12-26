import React, { useContext, useState, useEffect } from 'react';
import MediaItem from '../../MediaItem';
import ResultsContext from '../../../context/results/resultsContext';
import PaginationWrapper from '../../layout/PaginationWrapper';

const Results = props => {
  const [page, setPage] = useState(1);
  const resultsContext = useContext(ResultsContext);
  const { query } = props.match.params;
  const { results, total_results, total_pages } = resultsContext.results;

  useEffect(() => {
    setPage(1);
    resultsContext.searchMovies(query, page);
  }, [query]);

  const handlePageChange = activePage => {
    setPage(activePage);
    resultsContext.searchMovies(query, activePage);
  };
  console.log(results);

  return (
    <div className='container-fluid'>
      {results && <h2 className='section-title'>Results: </h2>}
      <div className='row'>
        <MediaItem items={results} type='movie' />
        <div className='pagination-container'>
          <PaginationWrapper
            currentPage={page}
            totalItems={total_results}
            onChange={handlePageChange}
            totalPages={total_pages}
          />
        </div>
      </div>
    </div>
  );
};
export default Results;
