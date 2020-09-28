import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBookmark,
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

import { Button } from '../Button';
import { auth } from '../../../firebase/firebase';
import { connect } from 'react-redux';

const NavbarUserService = ({ userData }) => {
  // const firestate = useContext(FirebaseContext);

  // const { isLoggedIn, logoutUser, currentUser, userData } = firestate;

  // console.log(firestate);

  const setLogOut = () => auth.signOut();

  if (auth.currentUser) {
    return (
      <div className='dropdown'>
        <Button
          className='btn btn-light dropdown-toggle'
          id='dropdownMenu2'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          <FontAwesomeIcon icon={faUser} /> &nbsp;
          {userData.nickname || 'Profile'}
        </Button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenu2'>
          <li>
            <NavLink className='dropdown-item' to='/profile' exact>
              <FontAwesomeIcon icon={faUser} /> &nbsp; Cabinet
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile/bookmarks' className='dropdown-item'>
              <FontAwesomeIcon icon={faBookmark} /> &nbsp; Bookmarks
            </NavLink>
          </li>
          <div className='dropdown-divider'></div>
          <div className='d-flex align-items-center'>
            <a
              href=''
              className='dropdown-item'
              onClick={setLogOut}
              title='Sign out'
            >
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </a>
          </div>
        </ul>
      </div>
    );
  } else {
    return (
      <>
        <li>
          <NavLink to='/signup' className='nav-item nav-link'>
            <FontAwesomeIcon icon={faUserPlus} /> Signup
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' className='nav-item nav-link'>
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </NavLink>
        </li>
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  userData: state.firebase.userData,
});
export default connect(mapStateToProps)(NavbarUserService);
