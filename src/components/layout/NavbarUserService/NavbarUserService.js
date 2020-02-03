import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import FirebaseContext from '../../../context/firebase/firebaseContext';

const NavbarUserService = () => {
  const { isLoggedIn, logoutUser, currentUser, userData } = useContext(
    FirebaseContext
  );

  if (currentUser.uid && isLoggedIn) {
    console.log(currentUser);
    return (
      <li className='nav-item dropdown'>
        <a
          className='nav-link dropdown-toggle'
          data-toggle='dropdown'
          href='#'
          role='button'
          aria-haspopup='true'
          aria-expanded='false'
        >
          <i className='fas fa-user'></i> &nbsp;{userData.nickname || 'Profile'}
        </a>
        <div className='dropdown-menu'>
          <NavLink to='/profile' className='dropdown-item' href='#' exact>
            <i className='far fa-user'></i> &nbsp; Cabinet
          </NavLink>
          <NavLink to='/profile/bookmarks' className='dropdown-item'>
            <i className='far fa-bookmark'></i> &nbsp; Bookmarks
          </NavLink>
          <div className='dropdown-divider'></div>
          <div className='d-flex align-items-center'>
            <a
              href=''
              className='dropdown-item'
              onClick={logoutUser}
              title='Sign out'
            >
              <i className='fas fa-sign-out-alt mr-1'></i>Logout
            </a>
          </div>
        </div>
      </li>
    );
  } else {
    return (
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
    );
  }
};
export default NavbarUserService;
