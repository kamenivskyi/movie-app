import React, { useReducer, useEffect } from 'react';
import 'firebase/firestore';
import FirebaseContext from './firebaseContext';
import FirebaseReducer from './firebaseReducer';
import { SET_LOADING, SET_USER, LOG_OUT, SET_USER_DATA } from '../types';
import firebase from '../../firebase';

const FirebaseState = props => {
  const initialState = {
    isLoggedIn: false,
    currentUser: {},
    loading: false
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: SET_USER, payload: user });
      } else {
        return;
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

  const createUser = async (email, password) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(handleError);
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
