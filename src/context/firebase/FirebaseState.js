import React, { useReducer, useEffect } from 'react';
import 'firebase/firestore';
import FirebaseContext from './firebaseContext';
import FirebaseReducer from './firebaseReducer';
import { SET_LOADING, SET_USER, LOG_OUT, SET_BOOKMARKS } from '../types';
import firebase, { db } from '../../firebase';

const FirebaseState = props => {
  const initialState = {
    isLoggedIn: false,
    currentUser: {},
    bookmarks: [],
    loading: false
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: SET_USER, payload: user });
      } else {
        console.log('User is signed out');
        // User is signed out.
      }
    });
  }, []);

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const signinUser = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        // dispatch({ type: SET_USER, payload: res });
        if (res) {
          console.log('its ok!');
          console.log(res);
        }
      })
      .catch(handleError);
  };

  const addToBookmarks = obj => {
    db.collection('bookmarks').add(obj);
  };

  const createUser = async (email, password) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(handleError);
  };

  const getBookmarks = () => {
    setLoading();
    db.collection('bookmarks')
      .get()
      .then(({ docs }) => {
        setupBookmarks(docs);
        console.log(docs);
      });
  };
  const setupBookmarks = data => {
    const bookmarks = data.map(doc => {
      const bookmark = doc.data();
      return bookmark;
    });
    dispatch({ type: SET_BOOKMARKS, payload: bookmarks });
  };

  // var user = firebase.auth().currentUser;
  // user.updateProfile({
  //   displayName: "Jane Q. User",
  //   photoURL: "https://example.com/jane-q-user/profile.jpg"
  // }).then(function() {
  //   // Update successful.
  // }).catch(function(error) {
  //   // An error happened.
  // });

  const logoutUser = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: LOG_OUT }))
      .catch(error => {
        // An error happened
        console.log(error);
      });
  };

  const handleError = ({ code, message }) => {
    switch (code) {
      case 'auth/wrong-password':
        return alert('The password is wrong, please try again.');
      case 'auth/weak-password':
        return alert('The password is too weak');
      default:
        return alert(message);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        loading: state.loading,
        currentUser: state.currentUser,
        bookmarks: state.bookmarks,
        addToBookmarks,
        getBookmarks,
        createUser,
        signinUser,
        logoutUser
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
