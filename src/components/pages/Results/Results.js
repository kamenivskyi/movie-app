import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import MediaItems from '../../layout/MediaItems';
import PaginationWrapper from '../../layout/PaginationWrapper';
import Spinner from '../../common/Spinner';

import { searchItems } from '../../../redux/search/searchActions';

const Results = ({ searchItems, match, history, data, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentQuery, setCurrentQuery] = useState('');

  const { query, page } = match.params;

  useEffect(() => {
    console.log('fired');
    setCurrentPage(page);
    searchItems(query, page);
  }, [query]);

  if (!data) return null;

  const { results, total_results, total_pages } = data;

  const handlePageChange = activePage => {
    setCurrentPage(activePage);

    history.push(`/results/${query}/${activePage}`);

    searchItems(query, activePage);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='container-fluid'>
      <h2 className='section-title'>Results:</h2>
      {total_results > 0 ? (
        <div className='row'>
          <MediaItems items={results} type='movie' />

          <PaginationWrapper
            currentPage={currentPage}
            totalItems={total_results}
            totalPages={total_pages}
            onChange={handlePageChange}
          />
        </div>
      ) : (
        <p className='text-center'>No {query} found on request</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.search.items,
  loading: state.search.loading
});

export default connect(mapStateToProps, { searchItems })(Results);
