import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import FirebaseContext from '../../../context/firebase/firebaseContext';

import UpdateProfileModal from '../../layout/Modals/UpdateProfileModal';

import { Button } from '../../proxy/Button';

const Profile = () => {
  const { isLoggedIn, currentUser } = useContext(FirebaseContext);

  if (currentUser) {
    return (
      <div className='jumbotron'>
        <h1 className='section-title'>Email: {currentUser.email}</h1>
        <p>Username: {currentUser.displayName}</p>

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
