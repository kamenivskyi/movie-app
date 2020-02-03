import React, { useContext, useState, useEffect } from 'react';
import FirebaseContext from '../../../../context/firebase/firebaseContext';
import { Button } from '../../../proxy/Button';

export const UpdateProfileModal = () => {
  const { userData, updateUserProfile } = useContext(FirebaseContext);

  const [nickname, setNickname] = useState('');
  console.log(nickname);

  useEffect(() => {
    if (userData.nickname) {
      setNickname(userData.nickname);
    }
  }, [userData.nickname]);

  const onUpdateProfile = e => {
    e.preventDefault();
    updateUserProfile(nickname);
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
              value={nickname}
              onChange={e => setNickname(e.target.value)}
            />
            {/* <input type='text' className='form-control' />
            <input type='text' className='form-control' /> */}
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
