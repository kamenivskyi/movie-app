import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import FirebaseContext from '../../../context/firebase/firebaseContext';

const NavbarUserService = () => {
  const { isLoggedIn, logoutUser, currentUser } = useContext(FirebaseContext);
  console.log(currentUser.uid);
  return (
    <ul className='navbar-nav authentication navbar-item'>
      {!isLoggedIn && <span>loading...</span>}
      {currentUser.uid && isLoggedIn ? (
        <>
          <li>
            <NavLink to='/profile' className='nav-link nav-item mr-2'>
              <i className='fas fa-user'></i> &nbsp; Profile
            </NavLink>
          </li>
          <li className='d-flex align-items-center'>
            <a href='' className='nav-link nav-item' onClick={logoutUser}>
              <i className='fas fa-sign-out-alt mr-1'></i>Logout
            </a>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to='/signup' className='nav-item nav-link'>
              <i className='fas fa-user-plus mr-1'></i>Signup
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' className='nav-item nav-link'>
              <i className='fas fa-sign-in-alt mr-1'></i>Login
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};
export default NavbarUserService;
