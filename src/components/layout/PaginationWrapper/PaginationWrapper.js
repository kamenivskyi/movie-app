import React from 'react';
import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types';

const PaginationWrapper = props => {
  const { currentPage, totalItems, totalPages, onChange } = props;
  return (
    <div className='pagination-container'>
      {totalPages > 1 ? (
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={20}
          totalItemsCount={totalItems}
          pageRangeDisplayed={5}
          onChange={onChange}
          itemClass={'page-item'}
          linkClass={'page-link'}
          prevPageText={`Prev`}
          nextPageText={`Next`}
          firstPageText={`First`}
          lastPageText={`Last`}
        />
      ) : null}
    </div>
  );
};

PaginationWrapper.propTypes = {
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  totalPages: PropTypes.number,
  onChange: PropTypes.func
};

export default PaginationWrapper;
