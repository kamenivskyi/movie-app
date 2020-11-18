import React from "react";
import PropTypes from "prop-types";
import Pagination from "react-js-pagination";

import "./PaginationWrapper.css";

const PaginationWrapper = ({
  activePage,
  totalItems,
  totalPages,
  onChange,
}) => {
  return totalPages > 1 ? (
    <div className="pagination-container">
      <Pagination
        activePage={activePage}
        itemsCountPerPage={20}
        totalItemsCount={totalItems}
        pageRangeDisplayed={5}
        onChange={onChange}
        activeItemClass="active"
        itemClass={"page-item"}
        linkClass={"page-link"}
        activeClass={"active"}
      />
    </div>
  ) : null;
};

PaginationWrapper.propTypes = {
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  activePage: PropTypes.number,
  onChange: PropTypes.func,
};

export default PaginationWrapper;
