import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import UpdateProfileModal from "./UpdateProfileModal";
import Button from "../../components/Button";

const Profile = () => {
  const { user } = useSelector(({ firebase }) => ({ user: firebase.userData }));
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="section-title">Email: {user.email}</h1>
        <p>Username: {user.nickname}</p>

        <Button
          className="btn btn-success"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <FontAwesomeIcon icon={faEdit} /> Update profile info
        </Button>

        <hr className="my-4" />
        <UpdateProfileModal />
      </div>
    </div>
  );
};

export default Profile;
