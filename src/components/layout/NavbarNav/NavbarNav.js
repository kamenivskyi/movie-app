import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarNav = () => (
  <>
    <NavLink className='navbar-brand' to='/'>
      <i className='fas fa-film'></i> Movie Finder
    </NavLink>
    <div className='collapse navbar-collapse navbar-item'>
      <nav className='navbar-nav'>
        <NavLink className='nav-item nav-link' exact to='/'>
          Home
        </NavLink>
        <NavLink className='nav-item nav-link' to='/trending'>
          Trending
        </NavLink>
        <NavLink className='nav-item nav-link' to='/about'>
          About
        </NavLink>
      </nav>
    </div>
  </>
);

export default NavbarNav;
