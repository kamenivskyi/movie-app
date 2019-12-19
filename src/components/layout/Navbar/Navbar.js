import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <NavLink className='navbar-brand' to='/'>
        Movie Finder
      </NavLink>
      <button className='navbar-toggler' type='button'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <NavLink className='nav-item nav-link' to='/'>
            Home
          </NavLink>
          <NavLink className='nav-item nav-link' to='/'>
            People
          </NavLink>
          <NavLink className='nav-item nav-link' to='/'>
            Companies
          </NavLink>
          <NavLink className='nav-item nav-link' to='/'>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
