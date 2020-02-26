import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import FirebaseContext from '../../../context/firebase/firebaseContext';

import UpdateProfileModal from '../../layout/Modals/UpdateProfileModal';

import { Button } from '../../proxy/Button';

const Profile = () => {
  const { isLoggedIn, currentUser, userData } = useContext(FirebaseContext);

  if (isLoggedIn) {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>Email: {currentUser.email}</h1>
        <p>Username: {userData.nickname}</p>

        <Button
          className='btn btn-success'
          data-toggle='modal'
          data-target='#exampleModal'
        >
          <FontAwesomeIcon icon={faEdit} /> Update profile info
        </Button>

        <hr className='my-4' />
        <UpdateProfileModal />
      </div>
    );
  } else {
    return <Redirect to='/' />;
  }
};
export default Profile;
