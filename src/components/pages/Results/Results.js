import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import MediaItems from '../../layout/MediaItems';
import PaginationWrapper from '../../layout/PaginationWrapper';

import { searchItems } from '../../../redux/search/searchActions';

const Results = ({ searchItems, match, data }) => {
  const [page, setPage] = useState(1);

  const { query } = match.params;

  useEffect(() => {
    setPage(1);
    searchItems(query, page);
  }, [query]);

  if (!data) return null;

  const { results, total_results, total_pages } = data;

  const handlePageChange = activePage => {
    setPage(activePage);
    searchItems(query, activePage);
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

const mapStateToProps = state => ({
  data: state.search.items,
  loading: state.search.loading
});

export default connect(mapStateToProps, { searchItems })(Results);
