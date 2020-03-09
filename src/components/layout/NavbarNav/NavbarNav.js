import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavbarNav = () => {
  const location = useLocation();

  const trendingPath = location.pathname.includes('/trending/')
    ? location.pathname
    : '/trending';

  return (
    <>
      <nav className='navbar-nav'>
        <NavLink className='nav-item nav-link' exact to='/'>
          Home
        </NavLink>
        <NavLink className='nav-item nav-link' to={trendingPath}>
          Trending
        </NavLink>
        <NavLink className='nav-item nav-link' to='/about'>
          About
        </NavLink>
      </nav>
    </>
  );
};

export default NavbarNav;
