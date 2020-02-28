import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import FirebaseContext from '../../../../context/firebase/firebaseContext';
import { Button } from '../../../proxy/Button';
// import { updateUserName } from '../../../../firebase/firebase';

const UpdateProfileModal = ({ history }) => {
  const { currentUser, updateUserProfile } = useContext(FirebaseContext);

  const [name, setName] = useState('');

  // console.log(history);

  // useEffect(() => {
  //   const { displayName } = currentUser;

  //   if (currentUser.displayName) {
  //     setName(currentUser.displayName);
  //   }
  // }, [currentUser.displayName]);

  const onUpdateProfile = e => {
    e.preventDefault();

    // updateUserName(currentUser, name).the(res => console.log(res));
    updateUserProfile(name).then(() => {
      console.log(currentUser.displayName);
      //   alert('Document successfully updated!');
      //   // window.location.reload();
      //   //   history.go(0);
    });
  };

  return (
    <div
      className='modal fade'
      id='exampleModal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='updateProfileInfo'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <form className='modal-content' onSubmit={onUpdateProfile}>
          <div className='modal-header'>
            <h5 className='modal-title' id='updateProfileInfo'>
              Update profile
            </h5>
            <Button className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </Button>
          </div>
          <div className='modal-body'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your new nickname'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='modal-footer'>
            <Button className='btn btn-secondary' data-dismiss='modal'>
              Close
            </Button>
            <Button type='submit' className='btn btn-primary'>
              Save changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default withRouter(UpdateProfileModal);
