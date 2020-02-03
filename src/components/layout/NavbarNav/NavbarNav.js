import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarNav = () => (
  <>
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
  </>
);

export default NavbarNav;
