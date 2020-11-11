import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { auth } from '../../../firebase/firebaseUtils';

import UpdateProfileModal from '../../layout/Modals/UpdateProfileModal';
import Button from '../../layout/Button';

const Profile = () => {
  const user = useSelector((state) => state.firebase.userData);

  if (auth.currentUser) {
    return (
      <div className='jumbotron'>
        <div className='container'>
          <h1 className='section-title'>Email: {user.email}</h1>
          <p>Username: {user.nickname}</p>

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
      </div>
    );
  } else {
    return <Redirect to='/' />;
  }
};

export default Profile;
