import React, { useReducer, useEffect } from 'react';
import 'firebase/firestore';
import FirebaseContext from './firebaseContext';
import FirebaseReducer from './firebaseReducer';
import firebase, { db } from '../../firebase';
import {
  SET_LOADING,
  SET_USER,
  LOG_OUT,
  GET_BOOKMARKS,
  SET_USER_DATA
} from '../types';

const FirebaseState = props => {
  const initialState = {
    isLoggedIn: false,
    currentUser: {},
    userData: {},
    bookmarks: [],
    loading: false
  };
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);
  const user = firebase.auth().currentUser;

  useEffect(() => {
    console.log(user);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        db.collection('users')
          .doc(user.uid)
          .get()
          .then(doc => {
            console.log(doc.data());
            dispatch({ type: SET_USER_DATA, payload: doc.data() });
            dispatch({ type: SET_USER, payload: user });
          });
      } else {
        console.log('User is signed out');
        // User is signed out.
      }
    });
  }, []);

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
      .catch(onValidationError);
  };

  const createUser = async (nickname, email, password) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log(user);
        db.collection('userBookmarks')
          .doc(user.uid)
          .set({ tv: [], movie: [] });

        db.collection('users')
          .doc(user.uid)
          .set({ nickname });
      })
      .catch(onValidationError);
  };
  // db.collection(`userBookmarks/${uid}`).set({ bookmarks: []})
  //   return db
  //     .collection('users')
  //     .doc(user.uid)
  //     .add({ nickname, bookmarks: [] })
  //     .collection('bookmarks')
  //     .set({ nickname, bookmarks: [] });
  // })
  // .catch(onValidationError);

  const addToBookmarks = (data, type) => {
    if (user) {
      const doc = db.collection('userBookmarks').doc(user.uid);
      doc.update({
        [type]: firebase.firestore.FieldValue.arrayUnion(data)
      });
    }
  };

  const updateUserProfile = nickname => {
    const doc = db.collection('users').doc(user.uid);
    if (user) {
      return doc.update({ nickname }).catch(error => {
        alert('Error updating document, maybe the document does not exist!');
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
    }
  };

  const deleteBookmark = (data, type) => {
    db.collection('userBookmarks')
      .doc(user.uid)
      .update({
        [type]: firebase.firestore.FieldValue.arrayRemove(data)
      });
  };

  const getBookmarks = () => {
    if (user) {
      setLoading();
      db.collection('userBookmarks')
        .doc(user.uid)
        .onSnapshot(doc => {
          console.log(doc.data());
          dispatch({ type: GET_BOOKMARKS, payload: doc.data() });
        });
    }
  };

  const setupBookmarks = data => {
    console.log(data);
    const bookmarks = data.map(doc => doc.data());
    // dispatch({ type: SET_BOOKMARKS, payload: bookmarks });
    console.log(bookmarks);
  };

  const logoutUser = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: LOG_OUT });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onValidationError = ({ code, message }) => {
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
        userData: state.userData,
        bookmarks: state.bookmarks,
        addToBookmarks,
        deleteBookmark,
        getBookmarks,
        createUser,
        signinUser,
        logoutUser,
        updateUserProfile
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
