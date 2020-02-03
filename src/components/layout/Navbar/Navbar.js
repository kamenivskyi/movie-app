import React from 'react';
import { NavLink } from 'react-router-dom';

import Search from '../Search';
import NavbarNav from '../NavbarNav/NavbarNav';
import NavbarUserService from '../NavbarUserService';
import { Button } from '../../proxy/Button';

import './Navbar.css';

const NavbarToggleButton = () => (
  <Button
    className='navbar-toggler'
    data-toggle='collapse'
    data-target='#navbarCollapse'
    aria-controls='navbarCollapse'
    aria-expanded='true'
    aria-label='Toggle navigation'
  >
    <span className='navbar-toggler-icon'></span>
  </Button>
);

const Navbar = () => (
  <header className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
    <NavLink className='navbar-brand' to='/'>
      <i className='fas fa-film'></i> Movie Finder
    </NavLink>
    <NavbarToggleButton />
    <div className='collapse navbar-collapse' id='navbarCollapse'>
      <NavbarNav />
      <Search />
      <ul className='navbar-nav authentication navbar-item'>
        <NavbarUserService />
      </ul>
    </div>
  </header>
);

export default Navbar;
