import React from 'react';

const MovieTabs = () => {
  return (
    <div className='col-12'>
      <ul className='nav nav-pills'>
        <li className='nav-item'>
          <a className='nav-link active' href='#'>
            Active
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Link
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Link
          </a>
        </li>
      </ul>
    </div>
  );
};
export default MovieTabs;
