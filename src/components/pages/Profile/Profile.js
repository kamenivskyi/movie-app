import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import FirebaseContext from '../../../context/firebase/firebaseContext';
import Spinner from '../../common/Spinner';
import UpdateProfileModal from '../../layout/Modals/UpdateProfileModal';
import { Button } from '../../proxy/Button';

const Profile = () => {
  const { isLoggedIn, currentUser, userData } = useContext(FirebaseContext);

  if (isLoggedIn) {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>
          <Zoom left cascade>
            Email: {currentUser.email}
          </Zoom>
        </h1>
        <p>Username: {userData.nickname}</p>

        <Button
          className='btn btn-success'
          data-toggle='modal'
          data-target='#exampleModal'
        >
          <i className='fas fa-edit'></i> Update profile info
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
