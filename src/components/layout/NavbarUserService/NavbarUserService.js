import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import FirebaseContext from '../../../context/firebase/firebaseContext';

const NavbarUserService = () => {
  const { isLoggedIn, logoutUser } = useContext(FirebaseContext);
  return (
    <ul className='navbar-nav authentication navbar-item'>
      {isLoggedIn ? (
        <>
          <li>
            <NavLink to='/profile' className='nav-link nav-item mr-2'>
              <i className='fas fa-user'></i> &nbsp; Profile
            </NavLink>
          </li>
          <li className='d-flex align-items-center'>
            <button className='btn btn-danger' onClick={logoutUser}>
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
  );
};
export default NavbarUserService;
