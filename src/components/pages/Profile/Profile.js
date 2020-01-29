import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import FirebaseContext from '../../../context/firebase/firebaseContext';
import MediaItems from '../../MediaItems';
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
  const { tvs, movies } = bookmarks;

  useEffect(() => {
    getBookmarks();
    console.log(bookmarks);
    console.log(tvs);
  }, []);

  if (isLoggedIn) {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>
          <Zoom left cascade>
            Email: {currentUser.email}
          </Zoom>
        </h1>
        <p>Username: {userData.nickname}</p>
        <p className='lead'>Bookmarks: </p>
        <button className='btn btn-success'>
          <i className='fas fa-edit'></i>
        </button>
        <hr className='my-4' />
        <div className='row'>
          {loading && <Spinner />}
          {movies && <MediaItems items={movies} type='movie' />}
          {tvs && <MediaItems items={tvs} type='tv' />}
        </div>
      </div>
    );
  } else {
    return <Redirect to='/' />;
  }
};
export default Profile;
