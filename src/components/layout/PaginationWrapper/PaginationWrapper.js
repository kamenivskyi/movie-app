import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-pagination-js';

import 'react-pagination-js/dist/styles.css';

const PaginationWrapper = ({ currentPage, totalItems, totalPages, onChange }) =>
  totalPages > 1 ? (
    <div className='pagination-container'>
      <Pagination
        currentPage={currentPage}
        totalSize={totalItems}
        sizePerPage={20}
        changeCurrentPage={onChange}
        theme='border-bottom'
      />
    </div>
  ) : null;

PaginationWrapper.propTypes = {
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  totalPages: PropTypes.number,
  onChange: PropTypes.func
};

export default PaginationWrapper;
