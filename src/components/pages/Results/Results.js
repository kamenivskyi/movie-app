import React, { useContext, useState, useEffect } from 'react';
import MediaItem from '../../MediaItem';
import ResultsContext from '../../../context/results/resultsContext';
import PaginationWrapper from '../../layout/PaginationWrapper';
import AlertContext from '../../../context/alert/alertContext';

const Results = ({ match }) => {
  const [page, setPage] = useState(1);
  const { items, searchMovies } = useContext(ResultsContext);
  const { setAlert } = useContext(AlertContext);
  const { query } = match.params;
  const { results, total_results, total_pages } = items;

  useEffect(() => {
    setPage(1);
    searchMovies(query, page);
    if (!total_results) {
      setAlert('Media not found', 'danger');
    }
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
          <MediaItem items={results} type='movie' />
          <PaginationWrapper
            currentPage={page}
            totalItems={total_results}
            onChange={handlePageChange}
            totalPages={total_pages}
          />
        </div>
      </div>
    );
  } else return null;
};
export default Results;
