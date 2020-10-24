import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { auth } from '../../../firebase/firebase';

import UpdateProfileModal from '../../layout/Modals/UpdateProfileModal';

import { Button } from '../../common/Button';

const Profile = ({ userData }) => {
  if (auth.currentUser) {
    return (
      <div className='jumbotron'>
        <div className='container'>
          <h1 className='section-title'>Email: {userData.email}</h1>
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
      </div>
    );
  } else {
    return <Redirect to='/' />;
  }
};

const mapStateToProps = (state) => ({
  userData: state.firebase.userData,
});
export default connect(mapStateToProps)(Profile);
