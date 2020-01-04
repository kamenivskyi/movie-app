import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import FirebaseContext from '../../../context/firebase/firebaseContext';
import MediaItem from '../../MediaItem';

const Profile = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const { isLoggedIn, currentUser } = useContext(FirebaseContext);

  const getBookmarks = () => {};

  useEffect(() => {
    getBookmarks();
    console.log(currentUser);
  }, []);

  if (!isLoggedIn) {
    return <Redirect to='/' />;
  } else {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>{currentUser.email}</h1>
        <p className='lead'>Bookmarks: </p>
        <hr className='my-4' />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <div className='row'>
          {/* <MediaItem items={bookmarks} type='movie' /> */}
        </div>
      </div>
    );
  }
};
export default Profile;
