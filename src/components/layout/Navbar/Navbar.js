import React, { useContext } from 'react';
import { NavLink, Route } from 'react-router-dom';
import FirebaseContext from '../../../context/firebase/firebaseContext';
import Search from '../Search';
import './Navbar.css';

const Navbar = () => {
  const firebaseContext = useContext(FirebaseContext);
  const { logoutUser, isLoggedIn } = firebaseContext;
  console.log('is loggedIn: ', isLoggedIn);
  console.log(firebaseContext);

  return (
    <header className='navbar navbar-expand-lg navbar-light'>
      <NavLink className='navbar-brand' to='/'>
        <i className='fas fa-film'></i> Movie Finder
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
        {isLoggedIn ? (
          <>
            <li>
              <NavLink to='/profile' className='nav-link nav-item mr-2'>
                <i className='fas fa-user'></i> &nbsp; Profile
              </NavLink>
            </li>
            <li>
              <button className='btn btn-outline-danger' onClick={logoutUser}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
      <button className='navbar-toggler' type='button'>
        <span className='navbar-toggler-icon'></span>
      </button>
    </header>
  );
};
export default Navbar;
