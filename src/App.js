import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { auth, db } from './firebase/firebase';

import Routes from './routes';
import Navbar from './components/layout/Navbar';
import ButtonToTop from './components/layout/ButtonToTop';

import './App.css';
import { setUserData } from './redux/firebase/firebaseActions';

const App = ({ setUserData, userData }) => {
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log('fired auth from app');
        setUserData(userAuth);
        // db.collection('users')
        //   .doc(auth.uid)
        //   .get()
        //   .then((doc) => console.log(doc.data()));
      }
    });
    // db.collection('todos') test
    //   .get()
    //   .then(function (querySnapshot) {
    //     querySnapshot.forEach(function (doc) {
    //       db.collection('todos')
    //         .doc(doc.id)
    //         .collection('comments')
    //         .get()
    //         .then((commentsSnapshot) => {
    //           commentsSnapshot.forEach((doc) => {
    //             console.log(doc.data());
    //           });
    //         });
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, ' => ', doc.data());
    //   });
    // });
    // db.collection('todos').doc();
    // auth.onAuthStateChanged(auth => {
    //   if (auth) {
    //     console.log(auth);
    //   }
    // });
  }, []);

  // const setUser = (userAuth) => async (dispatch) => {
  //   try {
  //     auth.signInWithEmailAndPassword(email, password).then((res) => {
  //       if (res) {
  //         dispatch({ type: Types.SET_USER_SIGNIN, payload });

  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <Navbar />
      <Routes />
      <ButtonToTop />
    </>
  );
};

const mapStateToProps = (state) => ({
  userData: state.firebase.userData,
});

export default connect(mapStateToProps, { setUserData })(App);
