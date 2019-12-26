import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Search from '../Search';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='navbar navbar-expand-lg navbar-light'>
      <NavLink className='navbar-brand' to='/'>
        Movie Finder
      </NavLink>
      <div className='collapse navbar-collapse navbar-item'>
        <nav className='navbar-nav'>
          <NavLink className='nav-item nav-link' exact to='/'>
            Home
          </NavLink>
          <NavLink className='nav-item nav-link' to='/popular'>
            Popular
          </NavLink>
          <NavLink className='nav-item nav-link' to='/about'>
            About
          </NavLink>
        </nav>
      </div>
      <Route render={props => <Search {...props} />} />
      <ul className='navbar-nav authentication navbar-item'>
        <li>
          <NavLink to='/signup' className='nav-item nav-link'>
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' className='nav-item nav-link'>
            Login
          </NavLink>
        </li>
      </ul>
      <button className='navbar-toggler' type='button'>
        <span className='navbar-toggler-icon'></span>
      </button>
    </header>
  );
};
export default Navbar;
