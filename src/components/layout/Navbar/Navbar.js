import React from 'react';
import { NavLink } from 'react-router-dom';

import Search from '../../layout/Search';
import NavbarNav from '../NavbarNav/NavbarNav';
import NavbarUserService from '../NavbarUserService';
import Button from '../Button';

import './Navbar.css';

const Navbar = () => (
  <header className='main-navbar navbar navbar-expand-lg navbar-dark bg-primary'>
    <div className='container'>
      <NavLink className='navbar-brand' to='/'>
        <i className='fas fa-film'></i> Movie Finder
      </NavLink>
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
      <div className='collapse navbar-collapse' id='navbarCollapse'>
        <NavbarNav />
        <Search />
        <ul className='navbar-nav authentication navbar-item'>
          <NavbarUserService />
        </ul>
      </div>
    </div>
  </header>
);

export default Navbar;
