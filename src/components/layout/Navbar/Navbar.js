import React from 'react';
import Search from '../Search';
import NavbarNav from '../NavbarNav/NavbarNav';
import NavbarUserService from '../NavbarUserService';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='navbar navbar-expand-lg navbar-light'>
      <NavbarNav />
      <Search />
      <NavbarUserService />
      {/* <div className='custom-control custom-switch'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitch1'
        />
        <label className='custom-control-label' htmlFor='customSwitch1'></label>
      </div> */}
      <button className='navbar-toggler' type='button'>
        <span className='navbar-toggler-icon'></span>
      </button>
    </header>
  );
};
export default Navbar;
