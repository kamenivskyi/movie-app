import React, { useReducer, useEffect } from 'react';
import 'firebase/firestore';
import FirebaseContext from './firebaseContext';
import FirebaseReducer from './firebaseReducer';
import firebase, {
  db,
  auth,
  createUserProfileDocument,
} from '../../firebase/firebase';
import {
  SET_LOADING,
  SET_USER,
  LOG_OUT,
  GET_BOOKMARKS,
  SET_USER_DATA,
} from '../types';

const FirebaseState = (props) => {
  const initialState = {
    // isLoggedIn: false,
    currentUser: null,
    // userData: {},
    bookmarks: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  // firebase variables
  const user = auth.currentUser;

  const docBookmarks = user && db.collection('userBookmarks').doc(user.uid);
  // const docUsers = user && db.collection('users').doc(user.uid);

  // useEffect(() => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       console.log(user);
  //       // const doc = db.collection('users').doc(userAuth.uid);

  //       // doc.get().then((doc) => console.log(doc.data()));

  //       // console.log(doc.get());
  //     }
  //     // if (userAuth) {
  //     //   const doc = db.collection('users').doc(userAuth.uid);

  //     //   doc.get().then(doc => {
  //     //     dispatch({ type: SET_USER_DATA, payload: doc.data() });
  //     //     dispatch({ type: SET_USER, payload: userAuth });
  //     //   });
  //     // } else {
  //     //   console.log('User is signed out');
  //     // }
  //   });
  // }, []);

  // useEffect(() => {
  //   auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       // console.log(user.displayName);

  //       userRef.onSnapshot(snapshot => {
  //         dispatch({
  //           type: SET_USER,
  //           payload: {
  //             id: snapshot.id,
  //             displayName: userAuth.displayName,
  //             ...snapshot.data()
  //           }
  //         });
  //       });
  //     }
  //     // setCurrentUser(userAuth);
  //     dispatch({ type: SET_USER, payload: userAuth });
  //   });
  // }, [user]);

  // const setLoading = () => dispatch({ type: SET_LOADING });

  // const signinUser = (email, password) => {
  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then((res) => {
  //       if (res) {
  //         console.log('its ok!');
  //         console.log(res);
  //       }
  //     })
  //     .catch(onValidationError);
  // };

  // const createUser = async (nickname, email, password) => {
  //   await auth
  //     .createUserWithEmailAndPassword(emasil, password)
  //     .then(({ user }) => {
  //       console.log(user);
  //       db.collection('userBookmarks')
  //         .doc(user.uid)
  //         .set({ tv: [], movie: [] });

  //       db.collection('users')
  //         .doc(user.uid)
  //         .set({ nickname });
  //     })
  //     .catch(onValidationError);
  // };

  // const addToBookmarks = (data, type) => {
  //   if (user) {
  //     docBookmarks.update({
  //       [type]: firebase.firestore.FieldValue.arrayUnion(data),
  //     });
  //   }
  // };

  // const updateUserProfile = (displayName) => {
  //   if (user) {
  //     return user.updateProfile({ displayName }).catch((error) => {
  //       alert('Error updating document, maybe the document does not exist!');
  //       console.error('Error updating document: ', error);
  //     });
  //   }
  // };

  // const deleteBookmark = (bookmark, type) => {
  //   if (user) {
  //     docBookmarks.update({
  //       [type]: firebase.firestore.FieldValue.arrayRemove(bookmark),
  //     });
  //   }
  // };

  // const getBookmarks = () => {
  //   if (user) {
  //     setLoading();

  //     docBookmarks.onSnapshot((doc) => {
  //       dispatch({ type: GET_BOOKMARKS, payload: doc.data() });
  //     });
  //   }
  // };

  // const logoutUser = async () => {
  //   await auth
  //     .signOut()
  //     .then(() => {
  //       dispatch({ type: LOG_OUT });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  // const onValidationError = ({ code, message }) => {
  //   switch (code) {
  //     case 'auth/wrong-password':
  //       return alert('The password is wrong, please try again.');
  //     case 'auth/weak-password':
  //       return alert('The password is too weak');
  //     default:
  //       return alert(message);
  //   }
  // };

  return (
    <FirebaseContext.Provider
      value={{
        // isLoggedIn: state.isLoggedIn,
        loading: state.loading,
        currentUser: state.currentUser,
        // userData: state.userData,
        bookmarks: state.bookmarks,
        // addToBookmarks,
        // deleteBookmark,
        // getBookmarks,
        // signinUser,
        // updateUserProfile,
        // createUser,
        // logoutUser,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
