import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookmark,
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";
import { auth } from "../../firebase/firebaseUtils";
import { useSelector } from "react-redux";

const NavbarUserService = () => {
  const user = useSelector((state) => state.firebase.userData);

  if (auth.currentUser) {
    return (
      <div className="dropdown">
        <Button
          className="btn btn-light dropdown-toggle"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faUser} /> &nbsp;
          {user.nickname || "Profile"}
        </Button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li>
            <NavLink className="dropdown-item" to="/profile" exact>
              <FontAwesomeIcon icon={faUser} /> &nbsp; Cabinet
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/bookmarks" className="dropdown-item">
              <FontAwesomeIcon icon={faBookmark} /> &nbsp; Bookmarks
            </NavLink>
          </li>
          <div className="dropdown-divider"></div>
          <div className="d-flex align-items-center">
            <a
              href=""
              className="dropdown-item"
              onClick={() => auth.signOut()}
              title="Sign out"
            >
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </a>
          </div>
        </ul>
      </div>
    );
  }
  return (
    <>
      <li>
        <NavLink to="/signup" className="nav-item nav-link">
          <FontAwesomeIcon icon={faUserPlus} /> Signup
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="nav-item nav-link">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </NavLink>
      </li>
    </>
  );
};

export default NavbarUserService;
