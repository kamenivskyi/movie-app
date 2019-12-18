import React from 'react';
import Search from '../Search';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-danger mb-3'>
      <a className='navbar-brand' href='/'>
        Movie Finder
      </a>
      <button className='navbar-toggler' type='button'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <a className='nav-item nav-link' href='/'>
            Home
          </a>
          <a className='nav-item nav-link' href='/'>
            People
          </a>
          <a className='nav-item nav-link' href='/'>
            Companies
          </a>
          <a className='nav-item nav-link' href='/'>
            About
          </a>
        </div>
      </div>
      <Search />
    </nav>
  );
};
export default Navbar;
