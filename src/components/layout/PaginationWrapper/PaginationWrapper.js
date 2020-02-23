import React from 'react';
// import Pagination from 'react-pagination-js';
import 'react-pagination-js/dist/styles.css';
// import Pagination from 'rc-pagination';
import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types';

const PaginationWrapper = props => {
  const { currentPage, totalItems, totalPages, onChange } = props;
  return (
    <>
      {totalPages > 1 ? (
        <div className='pagination-container'>
          {/* <Pagination
            currentPage={currentPage}
            totalSize={totalItems}
            sizePerPage={20}
            changeCurrentPage={onChange}
            theme='circle'
          /> */}

          {/* <Pagination
            current={currentPage}
            pageSize={20}
            total={totalItems}
            onChange={onChange}
            nextIcon='next'
            prevIcon='prev'
            className='pagination'
          /> */}
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
        </div>
      ) : null}
    </>
  );
};

PaginationWrapper.propTypes = {
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  totalPages: PropTypes.number,
  onChange: PropTypes.func
};

export default PaginationWrapper;
