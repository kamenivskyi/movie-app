import React from 'react';
import PropTypes from 'prop-types';
// import Pagination from 'react-pagination-js';
import Pagination from 'react-js-pagination';

// import 'react-pagination-js/dist/styles.css';

const PaginationWrapper = ({
  currentPage,
  totalItems,
  totalPages,
  onChange
}) => {
  return totalPages > 1 ? (
    <div className='pagination-container'>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={20}
        totalItemsCount={totalItems}
        pageRangeDisplayed={5}
        onChange={onChange}
        activeItemClass='active'
        itemClass={'page-item'}
        linkClass={'page-link'}
        activeClass={'active'}
        activeLinkClass={'active-link'}
      />
    </div>
  ) : null;
};

PaginationWrapper.propTypes = {
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  totalPages: PropTypes.number,
  onChange: PropTypes.func
};

{
  /* <Pagination
currentPage={currentPage}
totalSize={totalItems}
sizePerPage={20}
changeCurrentPage={onChange}
theme='border-bottom'
/> */
}

export default PaginationWrapper;
