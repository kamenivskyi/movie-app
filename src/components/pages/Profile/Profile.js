import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import FirebaseContext from '../../../context/firebase/firebaseContext';
import MediaItem from '../../MediaItem';
import Spinner from '../../common/Spinner';

const Profile = () => {
  const {
    isLoggedIn,
    currentUser,
    userData,
    getBookmarks,
    bookmarks,
    loading
  } = useContext(FirebaseContext);

  useEffect(() => {
    getBookmarks();
    console.log(bookmarks);
    console.log(loading);
  }, []);

  if (isLoggedIn) {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>Email: {currentUser.email}</h1>
        <p>Username: {userData.nickname}</p>
        <p className='lead'>Bookmarks: </p>
        <button className='btn btn-success'>
          <i className='fas fa-edit'></i>
        </button>
        <hr className='my-4' />
        <div className='row'>
          {loading ? <Spinner /> : <MediaItem items={bookmarks} type='movie' />}
        </div>
      </div>
    );
  } else {
    return <Redirect to='/' />;
  }
};
export default Profile;
