import React from 'react';

const Pagination = () => {
  return (
    <nav aria-label='pagination'>
      <ul className='pagination'>
        <li className='page-item disabled'>
          <a className='page-link' href='#' tabindex='-1' aria-disabled='true'>
            Previous
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            1
          </a>
        </li>
        <li className='page-item active' aria-current='page'>
          <a className='page-link' href='#'>
            2 <span class='sr-only'>(current)</span>
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            3
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
